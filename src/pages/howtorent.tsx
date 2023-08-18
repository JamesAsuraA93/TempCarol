import React from 'react'

const Howtorent = () => {
    return(
    < div >
        <div className='px-10 py-8 bg-#EDE7D7 mt-8 grid grid-cols-2'>
            <h3 className="text-4xl font-3xl tracking-tight font-serif text-[#BD5858] flex-grow">How to rent?</h3>
            <ol className="list-decimal thaif text-sm pl-6 font-thin drop-shadow-md">
                <li className="pt-8">ทางร้านจะนับวันที่ลูกค้าได้รับชุด เช่น ลูกค้าเช่าแบบ 2 วัน โดยใช้ชุดวันที่ 5 ทางร้านจะจัดส่งให้ถึงมือลูกค้าภายในวันที่ 4 และลูกค้าส่งชุดคืนวันที่ 6</li>
                <li className="pt-3">เรทเช่า 1 วัน เฉพาะรังสิต ส่งคืนภายใน 24 ชั่วโมง ส่งแมส คืนแมส หรือรับหน้าร้าน ส่งคืนหน้าร้านเท่านั้น</li>
                <li className="pt-3">ลูกค้าต้องส่งชุดคืนก่อนเที่ยง (12:00 น.) ผ่านขนส่ง Flash, EMS, J&T, Grab, Messenger เท่านั้น หากลูกค้าสะดวกคืนหลังเที่ยง แนะนำให้เช่าเพิ่ม 1 วัน</li>
            </ol>
            <p className="thaif font-thin text-[#BD5858] drop-shadow-md item-center text-sm pt-4">หากส่งคืนล่าช้ามีค่าปรับวันละ 200 บาท ทุกกรณี! เนื่องจากจะทำให้กระทบต่อลูกค้าคิวถัดไปได้ ลูกค้าจะต้องรับผิดชอบคิวที่รออยู่ (จ่ายค่าเช่าคิวที่รออยู่เต็มจำนวน)</p>

            {/*เงื่อนไขการเช่า*/}
            <h3 className="text-4xl font-thin tracking-tight font-serif text-[#BD5858] flex-grow pt-16">เงื่อนไขการเช่า</h3>
            <ol className="list-decimal thaif text-sm pl-6 font-thin drop-shadow-md">
                <li className="pt-8">ห้ามลูกค้าดัดแปลงหรือแก้ไขชุด ห้ามติดเข็มกลัดทุกกรณี</li>
                <li className="pt-3">Promotion! สมัครสมาชิกฟรีไม่มีค่ามัดจำ (ใช้บัตรประชาชนลูกค้า และหน้าไอจีลูกค้า)</li>
                <li className="pt-3">ไม่ต้องซักชุดก่อนส่งคืน / ชุดว่ายน้ำ หากเปียกน้ำ ล้างน้ำเปล่าแล้วตากให้แห้งก่อนส่งคืน</li>
                <li className="pt-3">เช็ค Size สี Pattern ให้ละเอียด หากไม่มั่นใจปรึกษาแอดมินก่อนได้ ถ้ารับสินค้าแล้วใส่ไม่ได้ หากต้องการเปลี่ยนมีค่าเปลี่ยน 100 บาท ต่อชุด ค่าส่งลูกค้าออกเองทั้งหมด</li>
                <li className="pt-3">ถ้าชุดมีตำหนิ รอยเปื้อน หรือขาด แต่แก้ไขได้ ปรับจุดละ 300 บาท หากชำรุด ตำหนิที่ไม่สามารถแก้ไขได้ ปรับตามราคาของชุด</li>
            </ol>
            <p className="thaif font-thin text-[#BD5858] drop-shadow-md item-center text-sm pt-4">ขอให้ลูกค้าดูแลชุดเสมือนเป็นชุดของตัวเองนะคะ</p>

            {/*ระเบียบการเช่า*/}
            <h3 className="text-4xl font-thin tracking-tight font-serif text-[#BD5858] flex-grow pt-16">ระเบียบการเช่า</h3>
            <ol className="list-decimal thaif text-sm pl-6 font-thin drop-shadow-md">
                <li className="pt-8">เมื่อครบกำหนดคืนชุด ทางร้านไม่สามารถติดต่อลูกค้าได้เกิน 3 วัน ทางร้านจะดำเนินคดีตามกฎหมาย</li>
                <li className="pt-3">หากต้องการให้ถอนแจ้งความ ต้องคืนชุด รวมถึงจ่ายค่าเสียเวลา 10 เท่า จากราคาชุด</li>
                <li className="pt-3">หากลูกค้าขอยกเลิกการเช่า ไม่ว่าจะกรณีใดก็ตาม ทางร้านขอสงวนสิทธิ์ไม่คืนเงินทุกกรณี</li>
                <li className="pt-3">กรณีเกิดความผิดพลาดจากทางขนส่ง ทางร้านไม่มีส่วนรับผิดชอบ และไม่คืนเงินในทุกกรณี</li>
                <li className="pt-3">หลังจากตกลงเช่าชุด จะถือว่ายอมรับเงื่อนไขที่ทางร้านกำหนด</li>
            </ol>
        </div>
    </div>
    )
}
    

    
 

export default Howtorent