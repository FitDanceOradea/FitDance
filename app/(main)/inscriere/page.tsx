"use client";
import { useRouter } from "next/navigation";

const cat_v = [
  { label: "baby (4-6 ani)", value: "baby (4-6 ani)" },
  { label: "mini (6-8 ani)", value: "mini (6-8 ani)" },
  { label: "children I (8-10 ani)", value: "children I (8-10 ani)" },
  { label: "children II (10-12 ani)", value: "children II (10-12 ani)" },
  { label: "juniori I (13-14 ani)", value: "juniori I (13-14 ani)" },
  { label: "juniori II (15-16 ani)", value: "juniori II (15-16 ani)" },
  { label: "seniori (16 + ani)", value: "seniori (16 + ani)" },
] as const;
const cat_d = [
  "Solo",
  "Duo",
  "Trio",
  "Grup ( 4-7 Pers )",
  "Formatie ( 8+ Persoane )",
] as const;

const cat_s = [
  "Balet Dance",
  "Dans Contemporan",
  "Dans de Caracter",
  "Artistic Dance",
  "Jazz dans",
  "Show Dance",
  "Lyric",
  "Neoclasic ",
  "All styles (Open dance)",
  "Acro dance",
  "Hit Hop",
  "Majorete",
  "Street dance"
];
import { CalendarIcon, CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { log } from "console";
import clsx from "clsx";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { ChangeEvent, useState } from "react";
import Link from "next/link";

const accountFormSchema = z.object({
  nume: z.string({ required_error: "Nume obligtoriu" }),
  scoala: z.any(),
  cat_v: z.string(),
  cat_d: z.string(),
  cat_s: z.string(),

  email: z.string().email({ message: "Email invalid" }),
  telefon: z.string().min(8, { message: "Telefon invalid" }),
  mesaj: z.string().optional(),
  check1: z.boolean().refine((data) => data === true, {
    message: "Bifeaza Regulament",
  }),
  muzica: z.any().refine((value) => /\.(mp3)$/i.test(value), {
    message: "Foramul acceptat este doar mp3",
  }),
});

type AccountFormValues = z.infer<typeof accountFormSchema>;

const defaultValues: Partial<AccountFormValues> = {
  nume: "",
  scoala: "",
  cat_v: "",
  cat_d: "",
  cat_s: "",

  email: "",
  telefon: "",
  mesaj: "",
  muzica: "",
  check1:false
};

const Cursuri = () => {
  const [succes, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const router = useRouter();

  const form = useForm<AccountFormValues>({
    resolver: zodResolver(accountFormSchema),
    defaultValues,
  });

  async function onSubmit(data: AccountFormValues) {
    const formData = new FormData();
    if (file) {
      formData.append("muzica", file);
    }
    const jsonData = JSON.stringify(data);
    formData.append("jsonData", jsonData);

    const response = await fetch("/api/sendMail", {
      method: "POST",
      body: formData,
    });

    const response_2 = await response.json();
    if (response_2) {

form.reset(defaultValues)    


setTimeout(function() {
  setSuccess(true);
}, 2000);

setSuccess(false);    } else {
      setError(true);
    }
  }

  // const [fileNames, setFileNames] = useState<string[]>([]);
  const [file, setfile] = useState<File | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setfile(file);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="mt-20 ">
      <div className="text-center font-serif p-2  text-5xl mt-10 text-white font-semibold tracking-wider ">
        INSCIERE{" "}
      </div>
      <div className="flex items-center justify-center ">
        <Link
          href="/concurs"
          className="text-white bg-secy p-2 rounded-full px-4 font-serif  text-xl"
        >
          Regulament
        </Link>
      </div>
      <div className="bg-gray-200/60 mt-10 rounded-xl md:w-3/4 mx-3 md:mx-auto p-5 mb-10">
        <Form {...form}>
          {succes && (
            <div className="text-center my-2 text-xl text-green-700/90 uppercase font-bold">
              INREGISTRARE REALIZATA CU SUCCESS
            </div>
          )}
          {error && (
            <div className="text-center my-2 text-xl text-red-600/90 uppercase font-bold">
              INSCRIERE NEREUSITA, INCEARCA DIN NOU !
            </div>
          )}

          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="gap-x-4 gap-y-4 grid grid-cols-2 place-content-center"
          >
            <FormField
              control={form.control}
              name="nume"
              render={({ field }) => (
                <FormItem className="col-span-2 md:col-span-1">
                  <FormLabel>Nume si Prenume</FormLabel>
                  <FormControl>
                    <Input placeholder="Nume + Prenume" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="scoala"
              render={({ field }) => (
                <FormItem className="col-span-2 md:col-span-1 ">
                  <FormLabel>Scoala de dans / Coregraf</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="col-span-2 md:col-span-1 ">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Ex:youremail@gmail.com" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="telefon"
              render={({ field }) => (
                <FormItem className="col-span-2 md:col-span-1 ">
                  <FormLabel>Telefon</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="07xx xxx xxx"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            {/* ================ */}
            <FormField
              control={form.control}
              name="cat_v"
              render={({ field }) => (
                <FormItem className="flex flex-col md:col-span-1 col-span-2 w-full">
                  <FormLabel>Categorie Varsta</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          role="combobox"
                          className={cn(
                            "w-full justify-between",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value
                            ? cat_v.find((cat_v) => cat_v.value === field.value)
                                ?.label
                            : "Selecteaza categoria de Varsta"}
                          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-[300px] p-0">
                      <Command>
                        {/* <CommandInput placeholder="Search language..." /> */}
                        {/* <CommandEmpty>No language found.</CommandEmpty> */}
                        <CommandGroup>
                          {cat_v.map((cat_v) => (
                            <CommandItem
                              value={cat_v.label}
                              key={cat_v.value}
                              onSelect={() => {
                                form.setValue("cat_v", cat_v.value);
                              }}
                            >
                              <CheckIcon
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  cat_v.value === field.value
                                    ? "opacity-100"
                                    : "opacity-0"
                                )}
                              />
                              {cat_v.label}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </Command>
                    </PopoverContent>
                  </Popover>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="cat_d"
              render={({ field }) => (
                <FormItem className="flex flex-col md:col-span-1 col-span-2 w-full">
                  <FormLabel>Categorie Dans</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          role="combobox"
                          className={cn(
                            "w-full justify-between",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value
                            ? cat_d.find((cat_d) => cat_d === field.value)
                            : "Slecteaza categoria de dans"}
                          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-[300px] p-0">
                      <Command>
                        {/* <CommandInput placeholder="Search language..." /> */}
                        {/* <CommandEmpty>No language found.</CommandEmpty> */}
                        <CommandGroup>
                          {cat_d.map((cat_d) => (
                            <CommandItem
                              value={cat_d}
                              key={cat_d}
                              onSelect={() => {
                                form.setValue("cat_d", cat_d);
                              }}
                            >
                              <CheckIcon
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  cat_d === field.value
                                    ? "opacity-100"
                                    : "opacity-0"
                                )}
                              />
                              {cat_d}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </Command>
                    </PopoverContent>
                  </Popover>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="cat_s"
              render={({ field }) => (
                <FormItem className="flex flex-col md:col-span-2 col-span-2 w-full">
                  <FormLabel>Stil Dans</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          role="combobox"
                          className={cn(
                            "w-full justify-between",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value
                            ? cat_s.find((cat_s) => cat_s === field.value)
                            : "Slecteaza categoria de dans"}
                          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-[300px] p-0">
                      <Command>
                        {/* <CommandInput placeholder="Search language..." /> */}
                        {/* <CommandEmpty>No language found.</CommandEmpty> */}
                        <CommandGroup>
                          {cat_s.map((cat_s) => (
                            <CommandItem
                              value={cat_s}
                              key={cat_s}
                              onSelect={() => {
                                form.setValue("cat_s", cat_s);
                              }}
                            >
                              <CheckIcon
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  cat_s === field.value
                                    ? "opacity-100"
                                    : "opacity-0"
                                )}
                              />
                              {cat_s}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </Command>
                    </PopoverContent>
                  </Popover>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="mesaj"
              render={({ field }) => (
                <FormItem className="col-span-2 ">
                  <FormLabel>Mesaj</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Lasa-ne mesajul dorit ..."
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="muzica"
              render={({ field }) => (
                <FormItem className="col-span-2 ">
                  <FormLabel>Melodie</FormLabel>
                  <FormControl>
                    <Input
                      // onChange={console.log(e)}
                      className="file:bg-secy/10 file:text-secy hover:file:bg-blue-100"
                      placeholder="Lasa-ne mesajul dorit ..."
                      type="file"
                      {...field}
                      value={field.value ?? ""}
                      accept="mp3"
                      onChange={(event) => {
                        handleFileChange(event);
                        field.onChange(event);
                      }}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="check1"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 col-span-2">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      Am citit si am luat la cunostinta termenii si conditiile
                      regulamentului de participare din REGULAMENT si imi asum
                      respectarea acestora.{" "}
                    </FormLabel>
                  </div>
                </FormItem>
              )}
            />
            <Button
              className="col-span-2 rounded-full bg-secy uppercase"
              type="submit"
            >
              Realizeaza Inscriere
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Cursuri;
