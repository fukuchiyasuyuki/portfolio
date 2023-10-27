import React from 'react';

function Contact() {
  return (
    <main>
      <div className='container'>
        <div className='contact'>
          <h2 className='contact-title'>お問い合わせはこちら</h2>
          <form action="" className='contact-form'>
            <div className='contact-field'>
              <label htmlFor="name" className='contact-label'>名前</label>
              <input type="text" id='name' className='contact-input' placeholder='山田　太朗'/>
            </div>
            <div className='contact-field'>
              <label htmlFor="email" className='contact-label'>メールアドレス</label>
              <input type="text" id='email' className='contact-input'　placeholder='@gmail.com'/>
            </div>
            <div className='contact-field'>
              <label htmlFor="message" className='contact-label'>内容</label>
              <textarea id="message" className='contact-text' placeholder='メッセージを入力してください'></textarea>
            </div>
            <button type='submit' className='contact-submit'>送信</button>
          </form>
          <div className='contact-privacy'>
            <h3 className='contact-privacy-title'>プライバシーポリシー</h3>
            <p className='contact-privacy-note'>
              当サイトでは、お問い合わせいただく際に、お名前とメールアドレスを送信していただいております。
              お名前とメールアドレスにつきましては、返信させていただくことを目的としており、
              返信以外での目的での使用はいたしません。お問い合わせいただく際には、上記についてご了承いただくようお願いいたします。
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Contact