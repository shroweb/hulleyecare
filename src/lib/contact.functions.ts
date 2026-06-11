import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const ContactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  confirmEmail: z.string().trim().email().max(255),
  phone: z.string().trim().min(7, "Please enter a phone number").max(30),
  altPhone: z.string().trim().max(30).optional().or(z.literal("")),
  interest: z.enum([
    "NHS eye test",
    "Private eye test",
    "Children's eye test",
    "Contact lenses",
    "Frames",
    "Lenses",
    "Sunglasses",
    "Other",
  ]),
  date: z.string().trim().max(40).optional().or(z.literal("")),
  message: z.string().trim().min(5, "Please add a short message").max(1000),
  // honeypot
  website: z.string().max(0).optional().or(z.literal("")),
});

export type ContactInput = z.infer<typeof ContactSchema>;

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => {
    const parsed = ContactSchema.safeParse(input);
    if (!parsed.success) {
      throw new Error(parsed.error.issues[0]?.message ?? "Invalid input");
    }
    if (parsed.data.email !== parsed.data.confirmEmail) {
      throw new Error("Email addresses do not match");
    }
    if (parsed.data.website && parsed.data.website.length > 0) {
      // Silent success for bots
      return { ...parsed.data, _bot: true } as ContactInput & { _bot: boolean };
    }
    return parsed.data;
  })
  .handler(async ({ data }) => {
    if ((data as ContactInput & { _bot?: boolean })._bot) {
      return { ok: true };
    }
    // Owner can wire up SMTP / email service here.
    // For now, log server-side so requests are not lost.
    console.log("[contact] new appointment request", {
      name: data.name,
      email: data.email,
      phone: data.phone,
      interest: data.interest,
      date: data.date,
    });
    return { ok: true };
  });
