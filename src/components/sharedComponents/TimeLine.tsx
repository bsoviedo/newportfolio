import React, {useState} from 'react'

interface props{
    sectionNumber: number
}

export const TimeLine = (props: props) => {

    const [progress, setprogress] = useState(20)

/*     setInterval(()=>{
        if(progress < 32){
            setprogress(progress + 4)
        }

    }, 2000) */

  switch(props.sectionNumber){

    case 0:
        return(
            <div>

                <div className="progress_container">
                    <div className='dot firstDot'> </div> 
                    <div className='dot secondDot'> </div> 
                    <div className='dot thirdDot'> </div> 
                </div>
                <div className='item_1'> 
                <h1> Project 1    </h1>  

                <p> 1998 </p>
                <p> test </p>
                </div>

                <div className='item_2'>  
                <h1> Project 2    </h1>  

                <p> 2000 </p>
                <p> test </p>
                </div>
                <div className='item_1'> 
                <h1> Project 3    </h1>  

                <p> 2010 </p>
                <p> test </p>
                </div>

            </div>
        )
    case 1:
        return(
<div>
                  <div className="progress_container">
                  <div className='dot firstDot'> </div> 
                    <div className='dot secondDot'> </div> 
                    <div className='dot thirdDot'> </div> 
                </div>
             <div className='item_1'>  
            <h1> Project 4   </h1>  

            <p> 2015 </p>
            <p> test </p>
            </div>

            <div className='item_2'> 
 
            <h1> Project 5    </h1>  

            <p> 2017 </p>
            <p> test </p>
            </div>
            <div className='item_1'> 

            <h1> Project 6    </h1>  

            <p> 2020 </p>
            <p> test </p>
            </div>

        </div>
        )
    case 2: 
        return(
            <div>
                  <div className="progress_container">
                  <div className='dot firstDot'> </div> 
                    <div className='dot secondDot'> </div> 
                    <div className='dot thirdDot'> </div> 
                </div>
             <div className='item_1'>  
            <h1> Project 7   </h1>  

            <p> 2015 </p>
            <p> test </p>
            </div>

            <div className='item_2'> 
 
            <h1> Project 8    </h1>  

            <p> 2017 </p>
            <p> test </p>
            </div>
            <div className='item_1'> 

            <h1> Project 9    </h1>  

            <p> 2020 </p>
            <p> test </p>
            </div>

        </div>
        )

     default:
        return(
            <h1> Not found </h1>
        )
  }
}
