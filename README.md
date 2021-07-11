3SA03 React 

นางสาว ณัฐธิดา คลองแค 
6210110747 section01

## 7 งานหลังการทดลอง

### 1.เพิ่ม คำศัพท์ 

ใช้คำสั่ง const word =["Hello","STREAM","MOUTAIN","DISNEY","MOVIE","THAILAND"] ; เพื่อเพิ่มคำ

### 2.คำสั่งสุ่มคำศัพท์
  โดยใช้คำสั่ง const randomWord = _.sample(word);

### 3.เพิ่มปุ่ม restart 
    โดยใช้คำสั่ง const newGame = () => {
        window.location.reload()
    }

    <button className="newgame" onClick={newGame}>
          Restart
    </button> 

### 4.เพิ่มหัวข้อ React Game
    โดยทำการเพิ่ม class ชื่อว่า header 
    <header>
        <h1> React Game </h1>
      </header>

### 5.ตกเเต่งหน้าเวป ในไฟล์ App.css
    
