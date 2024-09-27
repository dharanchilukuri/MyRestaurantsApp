import { z } from "zod";

export const inputSchema = z.object({
    searchText: z.string().regex(/^[a-zA-Z0-9]*$/, "Only letters and numbers are allowed"),
});