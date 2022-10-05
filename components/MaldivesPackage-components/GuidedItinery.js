import PlaceDescLeft from "../utility-components/PlaceDescLeft";
import PlaceDescRight from "../utility-components/PlaceDescRight";
import image1 from "../../public/snorkeling.jpg";
import image2 from "../../public/IlandHopping.jpg";
import image3 from "../../public/dolphine.jpg";
import image4 from "../../public/coupleSitting.png";
import image5 from "../../public/boatMaldives.jpg";
import image6 from "../../public/BeachSideDinner.jpg";
import image7 from "../../public/speedBoatTransfer.jpg";

export default function GuidedItinery() {
  return (
    <div style={{ backgroundColor: "#EFF3FC" }}>
      <div className="container py-5">
        <h1 className="text-center fw-bolder pt-5">Guided Itinerary</h1>
        <p className="text-center fw-light text-muted">
          Spend a day appreciating the wildlife and natural beauty of the
          Maldives on an exciting day tour. No need to worry about itinerary
          planning, as a full-day adventure is organized for you.
        </p>
        <PlaceDescRight
          header={"01. Snorkeling"}
          desc={
            "The Maldives is home to 75% of all known coral species in the world and encompasses 647 million hectares of land and sea. What makes it so awesome for snorkelers is that you don't have to go deep to check out the region's 2,000 species of reef fish, which hang out just below the surface. We offer the chance to snorkel with sea turtles, reef sharks, and rays the Maldives are home to."
          }
          img={image1}
        />
        <PlaceDescLeft
          header={"02. Island Hopping"}
          desc={
            "Enjoy a day exploring a small part of the Maldives archipelago. We combine snorkel points with a local island tour, lunch, time relaxing on a sandbank and complete the day with a sunset cruise in search of dolphins. "
          }
          img={image2}
        />
        <PlaceDescRight
          header={"03. Dolphin Watching"}
          desc={
            "The boat will cruise to the dolphin point at the outer edge of the atoll. As you move away from the island enjoy the beautiful palm tree skylines of the islands. You’ll have a very good chance to see schools of dolphins swimming by the boat. You would surely want to come down to have a closer look as they dance and jump so close to the boat. Keep your phones ready for the moment."
          }
          img={image3}
        />
        <PlaceDescLeft
          header={"04. Lunch on Sandbank"}
          desc={
            "A great way to socialize and make new friends when you take a break from your busy excursion, and just sit back and relax as you have your lunch while gazing at probably the most beautiful view you will ever encounter. And maybe you dont want to socialize but just lay on the beach towel while gazing at the sun with your sunglass."
          }
          img={image4}
        />
        <PlaceDescRight
          header={"05. Maldivian Style Fishing"}
          desc={
            "This excursion will be have to be on a different day from the other excursion which covers snorkeling, dolphin watching and island hopping, You will depart around 4 o clock in a very small group which might comprise of another couple. You will mostly be dazing in the sun and relaxing on a private yacht which you will get all to yourself. After an hour, you will stop to enjoy the Maldivian fishing technique. Even if you are unable to catch fish, our tour operators are experts and they will make sure, you have enough catch for your dinner."
          }
          img={image5}
        />
        <PlaceDescLeft
          header={"06. Beachside Dinner"}
          desc={
            "Kaani Grand offers a variety of cuisines from all over the world. Find yourself entangled in a combustion of juicy and mouthwatering flavors while enjoying the sea at night. This is personally one of the highlight of my own last visit to Maldives as I made new friends while discussing life, and yes there is also Hookkah, which you would have to pay for!"
          }
          img={image6}
        />
        <PlaceDescRight
          header={"07. Speed Boat Transfer"}
          desc={
            "Our valet will be waiting for you at the airport. You can give him your luggage while you go outside the airport to enjoy the stunning views that Male City has to offer. Once you are done, you will rendezvous with our valet who will show you the way to the speedboat. Your trip to Maafushi should take around 2 hours. When you land , the hotel staff will be waiting where the speedboat docks, and they will help carry your luggage to the airport. Having a personal relationship with the hotel means that we can provide you a service you have never experienced yet and you will surely want to book with us again!"
          }
          img={image7}
        />
      </div>
    </div>
  );
}
