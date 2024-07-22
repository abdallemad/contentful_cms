import heroImage from './assets/hero.svg'
export default function Hearo(){
  return <section className="hero">
    <div className="hero-center">
      <div className="hero-title">
        <h1>contentful cms</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus necessitatibus hic officiis iusto similique, obcaecati voluptate consequuntur dolores provident at, sapiente non. Accusantium ab dolore aperiam hic eligendi modi maxime!</p>
      </div>
      <div className="img-container">
        <img src={heroImage} alt="" className='img'/>
      </div>
    </div>
  </section>
}