import {Hero ,PopularProduct,SuperQuality,Services,CustomerReview,Subscribe,Footer} from "./sections"
import Nav from "./componets/Nav"
export default function App() {
  return (
    <main className="relative">
      <Nav/> 
      <section className="xl:padding-l wide:padding-r padding-b">
       < Hero/>
      </section>

      <section className="padding">
      <  PopularProduct/>
      </section>
      <section className="padding">
      <  SuperQuality/>
      </section>
      <section className="padding-x py-10">
       < Services/>
      </section>
      <section className="bg-pale-blue padding ">
       < CustomerReview/>
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe/>
      </section>
      <section className="bg-black padding-x padding-t pb-8">
      <  Footer/>
      </section>


    </main>
  )
}