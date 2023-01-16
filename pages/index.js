import { Inter } from '@next/font/google'
import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>โครงการจ้างนำเข้าข้อมูลเพื่อการจดทะเบียนออนไลน์ทั่วประเทศ</title>
        <meta name="description" content="โครงการจ้างนำเข้าข้อมูลเพื่อการจดทะเบียนออนไลน์ทั่วประเทศ" />
        <link rel="icon" href="/dollogo.png" />
      </Head>
      <Grid container spacing={2}  p={1}>
        {/* <Box className={styles.card}> */}
        <Grid item  py={1}>
          <Typography paragraph py={1} className={styles.card}>
            iPhone 14 วัสดุตัวเครื่องอะลูมิเนียมเกรดเดียวกับที่ใช้ในอุตสาหกรรมการผลิตอากาศยาน แข็งแรงทนทาน มาตรฐานป้องกันน้ำป้องกันฝุ่น IP68 ตามมาตรฐาน IEC 60529 (ความลึกไม่เกิน 6 เมตร ภายในระยะเวลาสูงสุด 30 นาที)
            กับ 5 เฉดสีให้เลือก ได้แก่ Midnight, Starlight, Blue, Purple และ Product(RED) หน้าจอแสดงผลใหญ่ขึ้น เมื่อเทียบกับ iPhone 13 mini ซึ่ง iPhone 14
            ใช้หน้าจอประเภท OLED กับเทคโนโลยี Super Retina XDR - True Tone - HDR - Display P3 สามารถแสดงสีสันสมจริงมากยิ่งขึ้น พร้อมใช้กระจกป้องกันหน้าจอแบบเซรามิก ช่วยป้องกันรอยขีดข่วนและไม่เกิดรอยนิ้วมือ ทำความสะอาดหน้าจอได้ง่าย
            ส่วนข้อแตกต่าง ใช้ iPhone 13 อยู่ ควรเปลี่ยนเป็น iPhone 14 หรือไม่ : เปรียบเทียบ! ซื้อ iPhone 14 หรือ iPhone 13 ที่ราคาต่างกัน 3,000 บาท เลือกรุ่นไหนดี อย่างไรก็ถ้าตัดสินใจไม่ได้ระหว่าง iPhone 14 กับ iPhone 14 Plus แตกต่างมากน้อยแค่ ควรเลือกอะไรดี มาหาคำตอบกัน
          </Typography>
          <Typography paragraph py={1} className={styles.card}>
            Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
            eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
            neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
            tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
            sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
            tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
            gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
            et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
            tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
            eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
            posuere sollicitudin aliquam ultrices sagittis orci a.
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
