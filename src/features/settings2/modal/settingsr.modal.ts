export interface User {
    id: number; // شناسه کاربر
    firstName: string; // نام
    lastName: string; // نام خانوادگی
    maidenName?: string; // نام میانی (اختیاری)
    age: number; // سن
    gender: 'male' | 'female'; // جنسیت (مذکر یا مونث)
    email: string; // ایمیل
    phone: string; // شماره تماس
    username: string; // نام کاربری
    password: string; // رمز عبور
    birthDate: string; // تاریخ تولد
    image?: string; // تصویر کاربر (اختیاری)
    bloodGroup?: string; // گروه خونی (اختیاری)
    height?: number; // قد (اختیاری)
    weight?: number; // وزن (اختیاری)
    eyeColor?: string; // رنگ چشم (اختیاری)
    hair?: {
      color: string; // رنگ مو
      type: string; // نوع مو
    };

  }