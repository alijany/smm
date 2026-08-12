"use client";

import { fetcher } from "@/libs/api/api.util.fetcher";
import { Modal } from "@/ui/atoms/ui.modal";
import { FormEvent, useEffect, useState } from "react";
import { CreateLeadDto } from "./dashboard/leads/leads.types";

interface CourseRegistrationModalProps {
  courseTitle: string | null;
  onClose: () => void;
}

export function CourseRegistrationModal({ courseTitle, onClose }: CourseRegistrationModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [attendanceType, setAttendanceType] = useState("حضوری");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!courseTitle) {
      setName("");
      setPhone("");
      setAttendanceType("حضوری");
      setMessage("");
      setIsSubmitted(false);
      setError("");
    }
  }, [courseTitle]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!courseTitle || !name.trim() || !phone.trim()) return;

    setIsSubmitting(true);
    setError("");
    try {
      const dto: CreateLeadDto = {
        name: name.trim(),
        phone: phone.trim(),
        service: `ثبت‌نام دوره: ${courseTitle}`,
        message: [`نحوه شرکت: ${attendanceType}`, message.trim()].filter(Boolean).join("\n"),
      };
      await fetcher("/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dto),
      });
      setIsSubmitted(true);
    } catch {
      setError("ثبت درخواست انجام نشد. لطفاً دوباره تلاش کنید.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Modal isOpen={Boolean(courseTitle)} onClose={onClose} className="course-registration-modal">
      <div dir="rtl" className="max-h-[calc(100vh-2rem)] overflow-y-auto bg-white p-6 sm:p-8">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <p className="mb-1 text-xs font-bold text-[var(--rose-600)]">ثبت‌نام دوره</p>
            <h3 className="text-xl font-black text-[var(--slate-800)]">{courseTitle}</h3>
          </div>
          <button type="button" onClick={onClose} aria-label="بستن پنجره ثبت‌نام" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--slate-100)] text-xl text-[var(--slate-600)] transition hover:bg-[var(--slate-200)]">×</button>
        </div>

        {isSubmitted ? (
          <div className="py-8 text-center">
            <div className="mb-4 text-5xl" aria-hidden="true">✅</div>
            <h4 className="mb-2 text-lg font-black text-[var(--slate-800)]">درخواست ثبت‌نام شما دریافت شد</h4>
            <p className="text-sm leading-7 text-[var(--slate-500)]">برای تکمیل ثبت‌نام و اعلام زمان‌بندی دوره با شما تماس می‌گیریم.</p>
            <button type="button" onClick={onClose} className="mt-6 rounded-xl bg-[var(--rose-500)] px-8 py-3 font-bold text-white hover:bg-[var(--rose-600)]">متوجه شدم</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="design-field">
              <label htmlFor="course-registration-name">نام و نام خانوادگی <span className="text-[var(--rose-500)]">*</span></label>
              <input id="course-registration-name" value={name} onChange={(event) => setName(event.target.value)} placeholder="مثلا: محمد احمدی" required />
            </div>
            <div className="design-field">
              <label htmlFor="course-registration-phone">شماره تماس <span className="text-[var(--rose-500)]">*</span></label>
              <input id="course-registration-phone" type="tel" dir="ltr" className="text-right" value={phone} onChange={(event) => setPhone(event.target.value)} placeholder="۰۹۱۲۳۴۵۶۷۸۹" required />
            </div>
            <div className="design-field">
              <label htmlFor="course-registration-type">نحوه شرکت</label>
              <select id="course-registration-type" value={attendanceType} onChange={(event) => setAttendanceType(event.target.value)}>
                <option value="حضوری">حضوری</option>
                <option value="آنلاین">آنلاین</option>
                <option value="فرقی ندارد">فرقی ندارد</option>
              </select>
            </div>
            <div className="design-field">
              <label htmlFor="course-registration-message">توضیحات (اختیاری)</label>
              <textarea id="course-registration-message" value={message} onChange={(event) => setMessage(event.target.value)} placeholder="اگر سوال یا درخواست خاصی دارید بنویسید." />
            </div>
            {error && <p role="alert" className="text-center text-sm text-[var(--rose-600)]">{error}</p>}
            <button type="submit" disabled={isSubmitting || !name.trim() || !phone.trim()} className="mt-1 rounded-xl bg-[var(--rose-500)] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[var(--rose-600)] disabled:cursor-not-allowed disabled:bg-[var(--slate-300)]">
              {isSubmitting ? "در حال ثبت..." : "ثبت درخواست دوره"}
            </button>
            <p className="text-center text-[11px] leading-5 text-[var(--slate-400)]">ارسال این فرم به‌معنای رزرو قطعی یا پرداخت هزینه نیست؛ برای تکمیل ثبت‌نام با شما تماس می‌گیریم.</p>
          </form>
        )}
      </div>
    </Modal>
  );
}
