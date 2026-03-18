import { redirect } from "next/navigation";

export default function DemoPage() {
  redirect(
    "https://api.whatsapp.com/send/?phone=6588379368&text=Demo&type=phone_number&app_absent=0"
  );
}
