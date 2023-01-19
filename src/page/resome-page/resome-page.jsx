import '../../sass/page/resome-page/style.scss';
function resome_page() {
    function code_name(){
        // arraye farsi
        let regex=/^[qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM]*$/
        let code=document.getElementById('code-name').value.split(',');
        // for code lentgh
        for (let i = 0; i < code.length; i++) {
            const element = code[i];
            if (regex.test(element)) {
                return true
            }else{
                // remove value
                code.pop()
                document.getElementById('code-name').value=code.toString();
            }
        }
        }
        function resume(e){
            let avalue=e.target.value;
            if (avalue=='volvo') {
                
            }
            else{
                localStorage.setItem('resume',avalue);
            }
        }
        function phone_number(){
            // arryre number
            let regex=/^[0-9]*$/
            // input code value
            let code=document.getElementById('phone-number').value.split(',');
            // checked value code
            for (let i = 0; i < code.length; i++) {
                const element = code[i];
                if (regex.test(element)) {
                    return true
                }else{
                      // value delete 
                    code.pop()
                    document.getElementById('phone-number').value=code.toString();
                }
                
            }
            }
        function code_family(){
            // arraye farsi
            let regex=/^[qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM]*$/
            let code=document.getElementById('code-family').value.split(',');
            // for code lentgh
            for (let i = 0; i < code.length; i++) {
                const element = code[i];
                if (regex.test(element)) {
                    return true
                }else{
                    // remove value
                    code.pop()
                    document.getElementById('code-family').value=code.toString();
                }
            }
            }
    function submit_resuome(event){
event.preventDefault()
  // pm error 
  let errorP = document.getElementById("error-phone-number");
  errorP.innerHTML = "";
  let validateNull = 0;
  // value input
  let inputError = document.getElementsByClassName('phone-number');
  // for checked value input
  for (let index = 0; index < inputError.length; index++) {
      // if value error null
      if (inputError[index].value == "") {
          // pm error
          errorP.innerHTML = 'Information is incomplete';
          // border input error
          inputError[index].style.border='.5px solid red'; 
      }
      else {
          // border input
          inputError[index].style.border='.5px solid #dcdcdcdb ';
          validateNull ++;
      }
  }
  // lentgh select
  let lengthSelect = 0;
  // value selector
  let select_error=document.getElementsByClassName('select-error');
  // for value lentgh checked
  for (let index = 0; index < select_error.length; index++) {
    if (select_error[index].selected) {
        let select=select_error[index].parentElement;
      //   error pm
        errorP.innerHTML = 'Information is incomplete';
      //   error border input
        select.style.border='1px solid red';
    
    }
    else {
      //   borfer input
      let select=select_error[index].parentElement;
      select.style.border='1px solid gray';
      lengthSelect++;
    }
      
  }
      // file input value
      let file_input = document.getElementsByClassName("file-input");
      // error pm
      errorP.innerHTML='';
      // for checked value lentgh
      for (let index = 0; index < file_input.length; index++) {
        if (file_input[index].value == "") {
          // error pm
            errorP.innerHTML = ' Information is incomplete';
            // border error input
            file_input[index].parentElement.parentElement.style.border='.5px solid red'; 
        }
        else {
          // border input
          file_input[index].parentElement.parentElement.style.border='.5px solid #dcdcdcdb'; 
            validateNull ++;
        }
    }
  // checked value
  if (validateNull == 6 && lengthSelect==1) {
// history push next page
     errorP.style.color='#22a8d1';
     errorP.innerHTML='Your information was recorded';
     errorP.style.fontSize='13px';
  }
    }
    return (
        <>
            <header style={{position:'absolute'}} className='header-forsat'>
                <div className="logo-forsat">
                    <img className='logo-arkatec' src={process.env.PUBLIC_URL + '/logo_arka.png'} alt="" />
                </div>
                <div className="social-media-forsat">
                    <img className=" network-forsat" src={process.env.PUBLIC_URL + '/telegram.png'} alt="" />
                    <img className=" network-forsat" src={process.env.PUBLIC_URL + '/twitter.png'} alt="" />
                    <img className="network-forsat" src={process.env.PUBLIC_URL + '/instagram.png'} alt="" />
                </div>
            </header>
            <div className="box-resome">
                <h2 className='title-resuome' style={{paddingTop:'120px',textAlign:'center'}}>sending resume</h2>
                <form className='form-resoume' action="">
                <input type="text" name="phone" maxLength='18' id="code-name" onChange={code_name} className='phone-number' placeholder='first name' />
                <input type="text" name="phone" id="code-family" maxLength='18' onChange={code_family} className='phone-number' placeholder='last name' />
                    <div className="box-img-upload box-upload-resuome">
                        <div class="image-upload">
                        <div>  <label for="self">
                        <i class="fas fa-folder-open"></i>
                            </label>
                                <input className="file-input" id='self' type="file" /></div>
                            <div><p id="text-input-upload">Upload a selfie of yourself</p></div>
                        </div>
                    </div>
                    <div className="box-img-upload box-upload-resuome">
                
                <div class="image-upload">
                <div>  <label for="self1">
                <i class="fas fa-folder-open"></i>
                    </label>
                        <input className="file-input" id='self1' type="file" /></div>
                    <div><p id="text-input-upload">Upload pdf your resume</p></div>
          
                </div>
            </div>
            <input type="text" name="phone" id="phone-number" maxLength='11' className='phone-number' onChange={phone_number} placeholder='enter your phone number' />
            <select name="cars" className='phone-number' onChange={resume} >
                                    <option value="volvo" className='select-error' selected>Your specialty  </option>
                                    <option value="saab">front-end</option>
                                    <option value="mercedes">back-end</option>
                                    <option value="saab">ios</option>
                                    <option value="saab">android</option>
                                    <option value="saab">grafic</option>
                                </select>
                                <button onClick={submit_resuome} className='submit-send-resoume'>sending resume</button>
                                <p id="error-phone-number"></p>
                </form>
            </div>
        </>
    )
}
export default resome_page;