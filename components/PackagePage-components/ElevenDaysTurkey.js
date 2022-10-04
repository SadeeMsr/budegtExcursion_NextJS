import ButtonGroup from "../utility-components/ButtonGroup";

export default function ElevenDaysTurkey() {

  const greenBTN = {linkCaption:"Lets go", link:""};
  const whiteBTN = {linkCaption:"Learn more", link:"/Packages"};

  return (
    <div className="container p-5">
        <div className="row py-5">
            <div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center">
                <h1 className="fw-bold">11 days in Turkey</h1>
            </div>
            <div className="col-12 col-lg-6 border-3 border-start border-dark pt-4 pt-lg-0 ps-4 ps-md-5">
                <h6>This package includes</h6>
                <li>Arrival airport transfer from Istanbul airport</li>
                <li>2 night hotel in Istanbul</li>
                <li>1 night hotel in Canakkale</li>
                <li>2 night in Kusadasi</li>
                <li>1 night in Pamukkale</li>
                <li>2 nights in Antalya</li>
                <li>2 nights in Cappadocia</li>
                <li>10 open buffet breakfasts</li>
                <li>8 lunches</li>
                <li>8 Dinners</li>
                <li>Guided Istanbul City Tour</li>
                <li>Guided Gallipoli Tour</li>
                <li>Guided Troy Tour</li>
                <li>Guided Acropolis of Pergamon Tour</li>
                <li>Guided Ephesus and Sirince Village Tour</li>
                <li>Guided Pamukkale and Hierapolis Tour</li>
                <li>Guided Antalya Old City Tour with Waterfalls</li>
                <li>Guided Konya Tour</li>
                <li>Guided Cappadocia Tour with Underground City and Goreme Open Air Museum</li>
                <li>Transportation in a fully air - conditioned, non - smoking coach</li>
                <li>Professional English - speaking tour guides</li>
                <li>All entrance fees</li>
            </div>
        </div>
        <ButtonGroup greenBtn={greenBTN} whiteBtn={whiteBTN}/>
    </div>
  )
}
