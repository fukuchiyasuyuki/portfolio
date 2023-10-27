import React, { useEffect, useState } from 'react';
import data from '../type';


function Works() {
    const [fetchData, setFetchData] = useState<data[]>([]);

    useEffect(() => {
        fetch("/api/v1/articles")
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setFetchData(data);
        })
        .catch((error) => {
            console.log(error);
        });
    },[]);

  return (
    <main>
      <dl className='works-block'>
                    {fetchData.map((data) => (
                        <div className='works-field' key={data._id}>
                            <img src={`/images/${data.image}`} alt="作品の画像" className='works-image'/>
                            <h3 className='works-title'>{data.title}</h3>
                            <p className='works-date'>{data.date}</p>
                            <p className='works-text'>{data.content}</p>
                        </div>
                    ))}
                </dl>
    </main>
  )
}

export default Works