
export default function App() {
  return (
 <>
 <div className="mx-4 pt-6 pb-4">
  <nav className="flex justify-around items-center">
    <ul>
    <li><a href=""><img className="img" src="https://us.123rf.com/450wm/butenkow/butenkow1612/butenkow161204102/67428233-template-design-logo-school-vector-illustration-of-icon.jpg?ver=6" alt="" style={{width:"90px",height:"80px"}} /></a></li>
      </ul>
    <ul className="flex gap-5 text-lg font-bold text-purple-600 text-[22px] max-md:hidden">
      <li className="hover:text-green-700 hover:font-extrabold hover:text-xl hover:opacity-35"><a href="">Home</a></li>
    <li className="hover:text-green-700 hover:font-extrabold hover:text-xl hover:opacity-35"><a href="">News</a></li>
    <li className="hover:text-green-700 hover:font-extrabold hover:text-xl hover:opacity-35"><a href="">Notis</a></li>
    </ul>
    <ul className="md:hidden"><li><a href=""><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEUzMzP////g4OAjIyOtra3j4+Po6OgvLy9UVFSzs7PZ2dkpKSmLi4sgICAmJiYsLCyZmZn4+PhLS0vJyckZGRkODg48PDyFhYVQUFBBQUHBwcGioqIcHBzx8fFhYWHS0tJtbW2Tk5Nqamp1dXXDw8N8fHzXPpkBAAAFFUlEQVR4nO2d7XKrIBBANYhErV/BqKm2aZr2/V/xmtvpnzuDYAvL4t3ztzMNZ5bvRYjivRP5LoBzyDB8yDB8yDB8yDB8yDB8yDB8yDB8yDB8yDB8yDB8Nhi2XGYJBjLJW/uGeTOybmY4mDs2NrlNwzaJukpEmBBVFyVGkTQxbGaGS+8LwcrGiqGMmG8XJSySvzcczhjj9404D780bEe8AfyCjZrWuG740he+DbQU/cvPDdu+9l1+A+p+NYqrhkf8EXxQHH9qOGBvg9+wte5mxVCefZfcmPPKoKE2bDGPEv8gInVTVBs2odTRB0w9u1Eatp3vUm9iVgZRaTiFFMIliMlmw0tAzXBBXLYa5mFV0ijqVOtFlWFT+S7yRipVX6MyHMOqpEs1VU1sFIZtWP3MA6boTRWGh9Ca4dIQ+SZDWfou8GZKxcxNYZgFaJhtMkwCbIeKMZ8Mw4EMyRA/ZEiG+CFDMsQPGZIhfsiQDBXUlfPDM5VhltaJYV2+NknmlqR5LY0cXRiWb9eUuye9vpnsGjkwnJuUHyDgaTP7MGS3FMTvQXozKI9tQ/EKJ7govmqzDNYNZwlTRb/gUltPbRuKI2QIlyBqU0W2DYsnYMMn3dke24YsgaykSzU1KJFdw/IZ2PBZNyaS4eZamgEbZtC1tLgBG96gexrw0eIIPVrsf8SPauBZm3YFZX/mXU6AM+9Jv35ysXoCU0wnL6unJYr3HGQFnN89rYCXIaN8nxxvYmTZ9F4aHTennagfGiKCDMkQP2RIhvghQzLEDxmSIX7IkAzx48xQuMavYVGK09EtJ2G2ieHEUFSD5KlruByMbo5xYFifriCHMXh6PRns1dg3FKcD1L4+P5z0UbRvWF/hEhf8qm+L1g2rBjRvof9q1/55GkC/B+Dnaeo7cP7wrutsbBtWE3AOeNJVUzqpsNnwA9jwA9xw92cx9t8O99+X7n88hJ7T3ODnNFEFOi/VX7VCa4vthlF9kUDrQ3nxsj5cojh/PgOs8Z8/Z09r/Gj/+zR/2fleGybIkAzxQ4ZkiB8yJEP8kCEZ4ocMyRA/bgxFVVa1W5ZfMFsEOzEsT5O85m65yulkdJmqA0NRJCl3v9nGeZoUBmF0YFhJsG/XPgzu3nbw/SFgjlSfH3VgWHyC5i0+tVuK1g1LwLTFI3GhDaL1b7lBPwM2ub7Feg64Ac4Ba48M0Z0KWw3/g9Mmuzdk4GcxwG/+GID70gH85o8eOIbad2/sj/ignSlPwEd84CDyHv48TVQAnopK7x5OQS//8h3ouAk/vJsUx8Eav+gTnrq++2P5gcToJU0nuxiCVW/Dk1uGt8rsrV5Xe2114RrTh0JpN5EM8UOGZIgfMiRD/JAhGeKHDMkQP2T43xnu/y3Z/b8HvP83nff/Lvf+31aP9TdtIKNqNhrmoTXELt9oGGvzdbgQF5WI0lCbVcYFmzYbtmFV007Rk64Yxk1IQWSqfmbNMI7CaYliTUP9J3n2XXBjzooZm8YwHkKpp2xYsVgzjI9m34n7plBNZ/SGbW+anvRJ3Sv7Ua1h/GKUQfdL0b+sOqwbxu2IvS2ycTWCWsOluzljHjTEea2TMTOMZYQ3jCxaGSaMDZfZzWx23gMYwWb1TGabYdwmfWf49REUour6RNMCNxgu5M3IutL5szlmzB0bG9V68KeGCy2XWYKBTHKj6G02DBQyDB8yDB8yDB8yDB8yDB8yDB8yDB8yDB8yDB8yDJ/9G/4BbgHWFQ4jNEYAAAAASUVORK5CYII=" alt="" style={{width:"90px",height:"80px"}} /></a></li></ul>
    
  </nav>
  <br/>
  <section className="hero pt-16 flex justify-around max-md:block items-center text-center"> 
    <div><h1 className="text-[66px] max-lg:text-[56px] max-md:text-[40px] text-pink-500 font-bold">my school <br /> name is golden<br /> pluh   high school.</h1></div>
    <br />
    <br />
    <div>
      <div className="flex items-center justify-center">  <img  src="data:image/jpeg;base64,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" alt="" /></div>
    </div>
  </section>
  <br />
  <section className="pt-9">
    <div className="flex justify-center">
      <input type="text" placeholder="search there" className="border border-gray-200 ring-2 rounded-3xl w-[60%] py-3 px-4 " />
    </div>
    <br />
    <div className="pt-2">
      <table className="border bg-gray-300 w-full h-72 rounded-xl ring-1">
       <caption className="text-[34px] font-bold">Student information</caption>
       <tr>
        <th className="text-[22px] text-red-500 font-bold ">Name</th>
        <th className="text-[22px] text-red-500 font-bold ">Id</th>
        <th className="text-[22px] text-red-500 font-bold ">Scores</th>
        <th className="text-[22px] text-red-500 font-bold ">Percen</th>
       </tr>
       <tr>
        <th className="text-lg text-blue-400"><a href="">arif</a></th>
        <th className="text-lg text-blue-400">01</th>
        <th className="text-lg text-blue-400">181</th>
        <th className="text-lg text-blue-400">81%</th>
       </tr>
       <tr>
        <th  className="text-lg text-blue-400"><a href="">tarif</a></th>
        <th  className="text-lg text-blue-400">02</th>
        <th  className="text-lg text-blue-400">261</th>
        <th  className="text-lg text-blue-400">91%</th>
        
       </tr>
       <tr>
        <th  className="text-lg text-blue-400"><a href="">momin</a></th>
        <th  className="text-lg text-blue-400">03</th>
        <th  className="text-lg text-blue-400">381</th>
        <th  className="text-lg text-blue-400">88%</th>
       </tr> <tr>
        <th  className="text-lg text-blue-400"><a href="">siraj</a></th>
        <th  className="text-lg text-blue-400">04</th>
        <th  className="text-lg text-blue-400">101</th>
        <th  className="text-lg text-blue-400">61%</th>
       </tr>
       <tr>
        <th  className="text-lg text-blue-400"><a href="">alex</a></th>
        <th  className="text-lg text-blue-400">05</th>
        <th  className="text-lg text-blue-400">181</th>
        <th  className="text-lg text-blue-400">77%</th>
       </tr>
       <tr>
        <th  className="text-lg text-blue-400"><a href="">sasraj</a></th>
        <th  className="text-lg text-blue-400">06</th>
        <th  className="text-lg text-blue-400">191</th>
        <th  className="text-lg text-blue-400">66%</th>
       </tr>
       <tr>
        <th  className="text-lg text-blue-400"><a href="">night</a></th>
        <th  className="text-lg text-blue-400">07</th>
        <th  className="text-lg text-blue-400">199</th>
        <th  className="text-lg text-blue-400">61%</th>
       </tr>
       <tr>
        <th  className="text-lg text-blue-400"><a href="">thor</a></th>
        <th  className="text-lg text-blue-400">08</th>
        <th  className="text-lg text-blue-400">701</th>
        <th  className="text-lg text-blue-400">66%</th>
       </tr>
      </table>
    </div>
  </section>
  <br />
  <div className="py-10 bg-slate-200 ring-2 rounded-lg">
    <h1 className="text-red-700 rounded-lg  flex justify-center font-bold "><a href="">copyright@flexntdx9586.com</a></h1>
  </div>
 </div>
 </>
  )
}



