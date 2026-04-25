import { Router, type IRouter } from "express";
import { CreateContactMessageBody } from "@workspace/api-zod";
import { db, contactMessagesTable } from "@workspace/db";
import { desc } from "drizzle-orm";

const router: IRouter = Router();

router.post("/contact", async (req, res, next) => {
  try {
    const parsed = CreateContactMessageBody.parse(req.body);
    const [created] = await db
      .insert(contactMessagesTable)
      .values({
        name: parsed.name,
        email: parsed.email,
        subject: parsed.subject ?? null,
        message: parsed.message,
      })
      .returning();
    res.status(201).json({
      id: created.id,
      name: created.name,
      email: created.email,
      subject: created.subject,
      message: created.message,
      createdAt: created.createdAt.toISOString(),
    });
  } catch (err) {
    next(err);
  }
});

router.get("/contact", async (_req, res, next) => {
  try {
    const rows = await db
      .select()
      .from(contactMessagesTable)
      .orderBy(desc(contactMessagesTable.createdAt));
    res.json(
      rows.map((r) => ({
        id: r.id,
        name: r.name,
        email: r.email,
        subject: r.subject,
        message: r.message,
        createdAt: r.createdAt.toISOString(),
      })),
    );
  } catch (err) {
    next(err);
  }
});

export default router;
