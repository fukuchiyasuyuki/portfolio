import React from 'react';

function Home() {
  return (
    <main>
        <section className='about'>
            <h2 className='about-title'>ポートフォリオ</h2>
            <div className='about-block'>
                <div className='about-prof'>
                    <h3 className='about-engineerType'>フロントエンドエンジニア</h3>
                    <dl className='about-prof-list'>
                        <div className='about-prof-field'>
                            <dt className='about-prof-item'>名前：</dt>
                            <dd className='about-prof-data'>福地　恭幸</dd>
                        </div>
                        <div className='about-prof-field'>
                            <dt className='about-prof-item'>生年月日：</dt>
                            <dd className='about-prof-data'>1987年生まれ</dd>
                        </div>
                        <div className='about-prof-field'>
                            <dt className='about-prof-item'>所在地：</dt>
                            <dd className='about-prof-data'>北海道札幌市</dd>
                        </div>
                        <div className='about-prof-field'>
                            <dt className='about-prof-item'>趣味：</dt>
                            <dd className='about-prof-data'>釣り、キャンプ、将棋、麻雀</dd>
                        </div>
                    </dl>
                </div>
                <img src="/images/sample.png" alt="プロフィール画像" className='about-image'/>
            </div>
            <p className='about-text'>
                フロントエンドエンジニアの福地です。僕は、2020年にWEBサイトを作れるようになりたいと思い、
                WEBデザインやプログラミングを一から独学で学びました。現在ではReactとTypescriptを学び、
                フロントエンドエンジニアとして、ホームページの作成や業務などで使用するWEBアプリケーション開発などを行っています。
            </p>
        </section>
        <hr />
        <section className='skills'>
            <h2 className='skills-title'>スキルシート</h2>
                <dl className='skills-block'>
                    <div className='skills-field'>
                        <dt className='skills-field-item'>HTMl/CSS</dt>
                        <dd className='skills-field-data'>経験年数：3年</dd>
                        <dd className='skills-field-data'>
                            WEBサイト、WEBアプリケーションのコーディングを行うことができます。
                            ECサイトやスマホアプリなどのレスポンシブサイトの構築も行えます。
                        </dd>
                    </div>
                    <div className='skills-field'>
                        <dt className='skills-field-item'>Javasvript</dt>
                        <dd className='skills-field-data'>経験年数：3年</dd>
                        <dd className='skills-field-data'>
                            WEBサイトの動的な部分を実装することができます。
                            APIでのデータの取得やログインフォームなどのバリデーション機能の実装も行うことができます。
                        </dd>
                    </div>
                    <div className='skills-field'>
                        <dt className='skills-field-item'>Github</dt>
                        <dd className='skills-field-data'>経験年数：1年</dd>
                        <dd className='skills-field-data'>
                            基本的な操作、ブランチなどの知識があります。
                            チーム開発でのコード管理等についても理解しています。
                        </dd>
                    </div>
                    <div className='skills-field'>
                        <dt className='skills-field-item'>Figma</dt>
                        <dd className='skills-field-data'>経験年数：1年</dd>
                        <dd className='skills-field-data'>
                            デザインツールとしてFigmaを使用しております。
                        </dd>

                    </div>
                    <div className='skills-field'>
                        <dt className='skills-field-item'>Typescript</dt>
                        <dd className='skills-field-data'>経験年数：3ヶ月</dd>
                        <dd className='skills-field-data'>
                            2023年7月からTypescriptの学習を始めました。
                            Typescriptの基本や特徴を理解し、現在メインで使用しております。
                        </dd>
                    </div>
                    <div className='skills-field'>
                        <dt className='skills-field-item'>React</dt>
                        <dd className='skills-field-data'>経験年数：3ヶ月</dd>
                        <dd className='skills-field-data'>
                            2023年7月からReactの学習を始めました。
                            Reactの基本的な使用方法(hooks)やページルーティングを始め、
                            理解しています。現在メインで使用しているフレームワークです。
                        </dd>

                    </div>
                    <div className='skills-field'>
                        <dt className='skills-field-item'>node.js</dt>
                        <dd className='skills-field-data'>経験年数：2ヶ月</dd>
                        <dd className='skills-field-data'>
                            2023年8月からnode.jsの学習を始めました。
                            Reactの学習に伴い、フルスタックのWEBアプリケーションを作成する際に、
                            一緒に勉強しました。node.jsのフレームワークであるexpressでサーバーを構築することができます。
                        </dd>
                    </div>
                    <div className='skills-field'>
                        <dt className='skills-field-item'>MongoDB</dt>
                        <dd className='skills-field-data'>経験年数：2ヶ月</dd>
                        <dd className='skills-field-data'>
                            2023年8月から使用しています。node.jsの学習の際に使用しています。
                            掲示板アプリの際に使用しました。
                        </dd>
                    </div>
                    <div className='skills-field'>
                        <dt className='skills-field-item'>Firebase</dt>
                        <dd className='skills-field-data'>経験年数：2ヶ月</dd>
                        <dd className='skills-field-data'>
                            2023年8月から使用しています。node.jsの学習の際に使用しています。
                            Googleアカウントからのログイン機能を実装するチュートリアルの際に使用しました。
                        </dd>
                    </div>
                </dl>
        </section>
    </main>
  )
}

export default Home