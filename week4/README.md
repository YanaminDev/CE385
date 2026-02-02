# Week 4 - Workshop 

## Workshop1.js
เป็นโปรแกรมที่ใช้ arrow function สำหรับสร้างฟังก์ชันการคำนวณทางคณิตศาสตร์ (Calculator)
- ฟังก์ชัน `operation(type, a, b)` รับพารามิเตอร์สามตัว คือ ชนิดของการดำเนินการและตัวเลขสองตัว
- รองรับการดำเนินการ: บวก (add), ลบ (subtract), คูณ (multiply), หาร (divide)
- หากการดำเนินการไม่ถูกต้อง จะคืนข้อความ "Invalid operation type"
- ใช้เพื่อสาธิตการใช้งาน arrow function และ conditional statement

## Workshop2.js
บริษัท์นี้เป็นโปรแกรมที่สาธิตการเรียก API แบบ asynchronous ทั้งแบบ Callback และ Promise
- **Callback Pattern**: ฟังก์ชัน `fetchDataWithCallback()` ใช้ setTimeout เพื่อจำลองการเรียกข้อมูลจากเซิร์ฟเวอร์และรอ 2 วินาที
- **Promise Pattern**: ฟังก์ชัน `fetchDataWithPromise()` ใช้ Promise เพื่อจัดการกับการดำเนินการแบบ async
- แสดงวิธีการใช้งาน `.then()` และ `.catch()` สำหรับการจัดการผลลัพธ์และข้อผิดพลาด

## Workshop3.js
บริษัท์นี้เป็นโปรแกรมที่สาธิตการใช้ Async/Await syntax สำหรับจัดการกับ asynchronous code
- ฟังก์ชัน `simulateAsyncOperation(time)` สร้าง Promise ที่จำลองการเรียกข้อมูลจากเซิร์ฟเวอร์
- ฟังก์ชัน `performAsyncTask()` ใช้ `async/await` เพื่อทำให้โค้ด asynchronous ดูเหมือน synchronous
- ใช้ `try/catch` เพื่อจัดการข้อผิดพลาด
- กำหนดเงื่อนไขว่าหากเวลา < 1000ms หรือมี error จะปฏิเสธ Promise

## Workshop4.js
บริษัท์นี้เป็นโปรแกรมที่สาธิตการใช้ `Promise.any()` เพื่อจัดการกับหลาย Promise พร้อมกัน
- สร้าง 3 Promises ที่จำลองการเรียกข้อมูลจากเซิร์ฟเวอร์สามตัวที่แตกต่างกัน
- `Promise.any()` จะคืนผลลัพธ์จาก Promise ตัวแรกที่สำเร็จ (resolve) โดยไม่ยึดติดกับลำดับ
- ในตัวอย่างนี้ Server 2 มี error แต่ Server 1 และ 3 สำเร็จ จึงจะคืนข้อมูลจาก Server 1 (ที่สำเร็จเร็วที่สุด)
- ใช้ `.then()` และ `.catch()` เพื่อจัดการผลลัพธ์
- เเละใช้ allSettled เพราะเเสดงค่าทั้งที่ดึงได้สำเร็จเเละดึงไม่สำเร็จพร้อมทั้งเเสดงทั้ง status
