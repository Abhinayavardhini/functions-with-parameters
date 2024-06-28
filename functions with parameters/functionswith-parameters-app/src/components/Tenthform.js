import React, { useRef } from 'react'

function Tenthform() {
    let firstNameInputRef=useRef();
    let lastNameInputRef=useRef();
    let engInputRef=useRef();
    let telInputRef=useRef();
    let hindiInputRef=useRef();
    let matInputRef=useRef();
    let sciInputRef=useRef();
    let socInputRef=useRef();
    let resultParaRef=useRef();

    
    let engSpanRef=useRef();
    let telSpanRef=useRef();
    let hindiSpanRef=useRef();
    let matSpanRef=useRef();
    let sciSpanRef=useRef();
    let socSpanRef=useRef();
    let firstNameSpanRef=useRef();
    let lastNameSpanRef=useRef();

    let inputOnFocus=(inputRef)=>{
        inputRef.current.style.backgroundColor="skyblue";
    }
    let inputOnChange=(inputRef,spanRef)=>{
        inputRef.current.style.backgroundColor="brown";
        spanRef.current.innerHTML=inputRef.current.value>34?"Pass":"Fail";
        spanRef.current.style.backgroundColor=inputRef.current.value>34?"green":"Red";
    }
    let inputOnBlur=(inputRef)=>{
        inputRef.current.style.backgroundColor="";
    }


  return (
    <div>
      <form className='form'>
        <div>
        <label>First Name :</label>
        <input ref={firstNameInputRef} type='text'
        onFocus={()=>{inputOnFocus(firstNameInputRef);}}
        onBlur={()=>{inputOnBlur(firstNameInputRef);}}
        ></input>
        <span ref={firstNameSpanRef}></span>
        </div>
        <div>
        <label>Last Name :</label>
        <input ref={lastNameInputRef} type='text'
        onFocus={()=>{inputOnFocus(lastNameInputRef);}}
        onBlur={()=>{inputOnBlur(lastNameInputRef);}}
        ></input>
        <span ref={lastNameSpanRef}></span>
        </div>
        <div>
        <label>English :</label>
        <input ref={engInputRef} type='Number'
        onFocus={()=>{inputOnFocus(engInputRef);}}
        onChange={()=>{inputOnChange(engInputRef,engSpanRef);}}
        onBlur={()=>{inputOnBlur(engInputRef);}}
        ></input>
        <span ref={engSpanRef}></span>
        </div>
        <div>
        <label>Telugu :</label>
        <input ref={telInputRef}  type='Number'
        onFocus={()=>{inputOnFocus(telInputRef);}}
        onChange={()=>{inputOnChange(telInputRef,telSpanRef);}}
        onBlur={()=>{inputOnBlur(telInputRef);}}
        ></input>
        <span ref={telSpanRef}></span>
        </div>
        <div>
        <label>Hindi :</label>
        <input  ref={hindiInputRef} type='Number'
        onFocus={()=>{inputOnFocus(hindiInputRef);}}
        onChange={()=>{inputOnChange(hindiInputRef,hindiSpanRef);}}
        onBlur={()=>{inputOnBlur(hindiInputRef);}}
        ></input>
        <span ref={hindiSpanRef}></span>
        </div>
        <div>
        <label>Maths :</label>
        <input ref={matInputRef}  type='Number'
        onFocus={()=>{inputOnFocus(matInputRef);}}
        onChange={()=>{inputOnChange(matInputRef,matSpanRef);}}
        onBlur={()=>{inputOnBlur(matInputRef);}}
        ></input>
        <span ref={matSpanRef}></span>
        </div>
        <div>
        <label>Science :</label>
        <input ref={sciInputRef}  type='Number'
        onFocus={()=>{inputOnFocus(sciInputRef);}}
        onChange={()=>{inputOnChange(sciInputRef,sciSpanRef);}}
        onBlur={()=>{inputOnBlur(sciInputRef);}}
        ></input>
        <span ref={sciSpanRef}></span>
        </div>
        <div>
        <label>Social :</label>
        <input ref={socInputRef}  type='Number'
        onFocus={()=>{inputOnFocus(socInputRef);}}
        onChange={()=>{inputOnChange(socInputRef,socSpanRef);}}
        onBlur={()=>{inputOnBlur(socInputRef);}}
        ></input>
        <span ref={socSpanRef}></span>
        </div>
        <div>
       <button type='button' onClick={()=>{
        let engmarks=Number(engInputRef.current.value);
        let telmarks=Number(telInputRef.current.value);
        let hindimarks=Number(hindiInputRef.current.value);
        let matmarks=Number(matInputRef.current.value);
        let scimarks=Number(sciInputRef.current.value);
        let socmarks=Number(socInputRef.current.value);
        let result;
       
        if(engmarks>=34&& telmarks>=34&& hindimarks>=34&& matmarks>=34&& scimarks>=34&& socmarks>=34){
        result="passed";

        }else{
        result="Failed";
        }
        let Totalmarks= engmarks+telmarks+hindimarks+matmarks+scimarks+socmarks;
        let perc= (Totalmarks/600)*100;

    resultParaRef.current.innerHTML=`TotalMarks of ${firstNameInputRef.current.value} ${lastNameInputRef.current.value} are ${Totalmarks} with percentage of ${perc.toFixed(2)}% and overall result is ${result}`;
   
       }}>Calculate</button>
        </div>
        <div>
           <p id='para' ref={resultParaRef}></p>
        </div>
      </form>
    </div>
  )
}

export default Tenthform
