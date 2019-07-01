import React from "react"
import { Link } from "gatsby"
import Title from "../Globals/Title"
export default function info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story"></Title>
        <div className="row">
          <div className="col10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              sint ipsam repellendus cupiditate perspiciatis quisquam, iusto
              deserunt velit officia enim mollitia dolorum id exercitationem
              tempore itaque cum nihil molestias laboriosam hic maiores
              consequuntur eos temporibus! Expedita, animi assumenda sapiente,
              reiciendis odit doloribus voluptas accusantium omnis dolor quae
              asperiores, laudantium provident.
            </p>
            <Link to="/about/">
              <button className="btn text-uppercase btn-yellow">
                about page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
