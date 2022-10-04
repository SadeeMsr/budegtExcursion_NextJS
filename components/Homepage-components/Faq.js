import { BsQuestionCircleFill } from "react-icons/bs";

export default function Faq() {
  return (
    <div className="pt-5 pb-5" style={{backgroundColor:'#EFF3FC'}} id="faq">
      <div className="container">
        <h1 className="fw-bold text-center"> Frequently asked questions </h1>
        <p className="fw-light text-muted text-center">We are here to help!</p>
        {/* 1st row--------------*/}
        <div className="row pt-5">
          <div className="col-12 col-md-6 row">
            <div className="col-1">
              <BsQuestionCircleFill style={{ color: "#77CD8A" }} className="fs-3" />
            </div>
            <div className="col-11">
              <h4 className="fw-bold">
                I have a disability - can I join a group tour?
              </h4>
              <p className="fw-light">
                We ask that you carefully consider whether you are physically
                and mentally able to complete the tour you have chosen. We will
                make reasonable adjustments to the operation of our trips to
                facilitate the requirements of disabled travelers. Many
                travelers with disabilities have been able to enjoy our trips by
                travelling with a companion who can assist with specific needs.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6 row ps-2 ps-lg-5">
            <div className="col-1">
              <BsQuestionCircleFill
                style={{ color: "#77CD8A" }}
                className="fs-3"
              />
            </div>
            <div className="col-11">
              <h4 className="fw-bold">
                Can I join a tour late or leave it early?
              </h4>
              <p className="fw-light">
                It&apos;s extremely difficult if not impossible to join a tour
                after it has begun. It is possible to leave a tour early,
                however you will be responsible for your own arrangements from
                the moment you decide to leave the tour. You would also be
                responsible for all costs associated with joining a tour late or
                leaving one early. If you feel this may be necessary, please
                consult us before you book your adventure.
              </p>
            </div>
          </div>
        </div>

        {/* 2nd row--------------*/}
        <div className="row mt-2">
          <div className="col-12 col-md-6 row">
            <div className="col-1">
              <BsQuestionCircleFill
                style={{ color: "#77CD8A" }}
                className="fs-3"
              />
            </div>
            <div className="col-11">
              <h4 className="fw-bold">
                I am concerned about the political stability of the country
                through which my group will travel.
              </h4>
              <p className="fw-light">
                The safety of our passengers, leaders and operators is a major
                priority for Budget Excursions. With this in mind, we monitor
                world events very closely and Budget Excursions makes
                operational decisions based on informed advice from a number of
                sources.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6 row ps-2 ps-lg-5">
            <div className="col-1">
              <BsQuestionCircleFill style={{ color: "#77CD8A" }} className="fs-3" />
            </div>
            <div className="col-11">
              <h4 className="fw-bold">
                Can I partake in activities outside of the program?
              </h4>
              <p className="fw-light">
                Absolutely. If there are included or optional activities that
                you don’t wish to participate in, you can do your own thing
                instead. The exception to this is when we are trekking or
                travelling from one destination to the next. Please note that if
                you choose to opt out of an included activity, no reimbursement
                can be made by Budget Excursions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
