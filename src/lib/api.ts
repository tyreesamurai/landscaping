import { db } from "@/db/index";
import { users, services, invoices, invoiceItems } from "@/db/schema";
import { eq } from "drizzle-orm";

const api = {
  users: {
    async getAll() {
      return db.select().from(users);
    },
    async getById(id: string) {
      return db.select().from(users).where(eq(users.id, id));
    },
  },
  services: {
    async getAll() {
      return db.select().from(services);
    },
    async getById(id: string) {
      return db.select().from(services).where(eq(services.id, id));
    },
  },
  invoices: {
    async getAll() {
      return db.select().from(invoices);
    },
    async getById(id: string) {
      return db.select().from(invoices).where(eq(invoices.id, id));
    },
    async getByUserId(userId: string) {
      return db.select().from(invoices).where(eq(invoices.userId, userId));
    },
  },
  invoiceItems: {
    async getAll() {
      return db.select().from(invoiceItems);
    },
    async getById(id: string) {
      return db.select().from(invoiceItems).where(eq(invoiceItems.id, id));
    },
    async getByInvoiceId(invoiceId: string) {
      return db
        .select()
        .from(invoiceItems)
        .where(eq(invoiceItems.invoiceId, invoiceId));
    },
  },
};

export default api;
