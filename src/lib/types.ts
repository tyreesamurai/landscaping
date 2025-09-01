import { z } from "zod";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { users, services, invoices, invoiceItems } from "@/db/schema";

export const userSchema = createSelectSchema(users);
export const userInsertSchema = createInsertSchema(users);

export const serviceSchema = createSelectSchema(services);
export const serviceInsertSchema = createInsertSchema(services);

export const invoiceSchema = createSelectSchema(invoices);
export const invoiceInsertSchema = createInsertSchema(invoices);

export const invoiceItemSchema = createSelectSchema(invoiceItems);
export const invoiceItemInsertSchema = createInsertSchema(invoiceItems);
