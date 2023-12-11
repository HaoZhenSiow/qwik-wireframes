import { component$,useStylesScoped$ } from '@builder.io/qwik'

import Review from '~/components/social-proof/card/Review'
import fluid from '~/lib/fluid'

export default component$(() => {
  useStylesScoped$(`
    section {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: ${fluid(150, 200, 350, 1440)};
    }

    h1 {
      align-self: start;
      margin-bottom: 2.5em;
    }

    .reviews {
      display: grid;
      gap: 1.5em;
      grid-template-columns: repeat(1, minmax(0, 1fr));

      @media (width > 650px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      @media (width > 1200px) {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }
    }
  `)

  return (
    <section class="fluid-section" aria-label="testimonials">
      <h1>Don't Take Our Word For It. Hear What Our Customers Say.</h1>
      <div class="reviews">
        <Review>
          <b>"Stree-free and Enjoyable Renovation Experience"</b>
          <div>
            <p>I am delighted to share my experience working with our talented interior designer, Moon, during the renovation of our apartment. Her exceptional skills and creative vision have truly left us in awe. She provide us with a beautifully designed space, but they also managed the project efficiently, keeping everything on track and within our budget. Her clear communication and problem-solving skills made the entire process stress-free and enjoyable. I wholeheartedly recommend our interior designer to my friends who seeking to enhance their living space with a touch of creativity and professionalism.</p>
          </div>
          <div q:slot="test">
            <b>"Stree-free and Enjoyable Renovation Experience"</b>
            <div>
              <p>I am delighted to share my experience working with our talented interior designer, Moon, during the renovation of our apartment. Her exceptional skills and creative vision have truly left us in awe. She provide us with a beautifully designed space, but they also managed the project efficiently, keeping everything on track and within our budget. Her clear communication and problem-solving skills made the entire process stress-free and enjoyable. I wholeheartedly recommend our interior designer to my friends who seeking to enhance their living space with a touch of creativity and professionalism.</p>
            </div>
          </div>
        </Review>
        <Review>
          <b>"Stree-free and Enjoyable Renovation Experience"</b>
          <div>
            <p>We discovered SHE interior through online to renovate our 4 rm HDB after having discussions and getting quotations from many different firms. June was our ID who was very supportive with us in the whole process. She was very prompt in addressing our queries and anytime we ask anything she was ready to clarify and help us. She also gave us lot of suggestions for better usability and classy look. It was a very smooth journey throughout starting from the design till the completion. Each and every detail they got it clarified several times before proceeding which avoided confusions and last minute surprises. The quality of the product was extremely good and they handed over the project on the stipulated timeline without any delay.</p>
            <p>We are very much satisfied with the work done and glad to have chosen them.</p>
            <p>We definitely recommend June and her firm SHE interior to others.</p>
          </div>
        </Review>
        <Review>
          <b>"Stree-free and Enjoyable Renovation Experience"</b>
          <div>
            <p>Thanks to Qian Rong help on renovating our house. He is very professional and responsible as our ID. He really ensured every step of our renovation journey is well taken care of. The project has met our planned timeline to be completed in 3 months. He is able to solve the problems we highlighted in time. He is such a reliable and trustworthy ID, it is a blessing to work with him. Thank you for your help and we truly appreciate it.</p>
          </div>
        </Review>
        <Review>
          <b>"Stree-free and Enjoyable Renovation Experience"</b>
          <div>
            <p>We chanced upon this co based on good reviews n used their service. Our ID is Karlun and he is professional, responsible and helpful! My friends praised his design n turns out the carpentry results is like from a magazine. Despite some hiccups, they are able to rectify and resolve them. We are very happy with the outcome! Thank you for the service!</p>
          </div>
        </Review>
        <Review>
          <b>"Stree-free and Enjoyable Renovation Experience"</b>
          <div>
            <p>I get to know our Designer Lucas From SHE Interior Design, he is very patient, friendly, helpful and responsible.</p>
            <p>Working with Lucas was an enjoyable and nice experience. From quoting, idealizing and planning, he listened to our needs and give his comment and suggestions. He is detail oriented to the little things we asked and feedback. He would be sure to attend and get back to us.</p>
            <p>Specially for thanks to Lucas for him amazing onsite follow up where he has always replied to our queries fast and rectification requests were fulfilled promptly. He is meticulous, very attentive to all of the requirements and manages the timeline so well!</p>
            <p>Overall a very pleasant experience with SHE interior and Lucas throughout the renovation journey, they have exceeded our expectation in various aspects! Service and workmanship quality are up to standard!</p>
            <p>Thumbs up for SHE Interior and Lucas. Highly recommended and definitely recommend him and SHE interior to our friends!!! Thank you for realizing our dream home !</p>
          </div>
        </Review>
        <Review>
          <b>"Stree-free and Enjoyable Renovation Experience"</b>
          <div q:slot="title">
            <p>We were recommended by friend to engage SHE Interior. Our designer Moon, she just handed over our house last week. The home’s design, and the ambience she created for us is definitely out of my expectation.</p>
            <p>Our theme is modern wood chic, ya I didn’t heard it before and even can’t find any info online. Before the first meet at SHE Interior, me and my husband were actually have some argue that he like wood theme but I don’t like, and also japandi/scandi/muji etc as well which other IDs suggested to us cuz I feel nowadays the wood is quite boring. And I don’t like to follow the trend.</p>
            <p>We bring out this concern to Moon during our first meet, she was actually talking lesser in the meanwhile, but what I feel is she more like as a listener at that time especially we had a lot of ideas bring out to her. She ask me my favourite colour and which colour that I wish to bring in to the new home. I actually like some other different tone of colours from the nature, besides wood colour, maybe ocean, plant, stone?</p>
            <p>She said, OK, then, lets me figure out for you.</p>
            <p>OK, cool.</p>
            <p>We were very fine with the space plan of our home. Every ID quite did the same things. But still, we decide to work with Moon at the end, not only SHE Interior is a widely praised ID firm, and also because of Moon’s steady and sure manner.</p>
            <p>She know our main concern. Even though she stand firm with the 3D must be after confirmation because we can’t imagine at the early stage (some ID ok to provide), but due to her sincerely presentation of her mood board and her innovative mix and match ideas for our new home’s design, we were willing to entrust her as our designer and last week the final result is, “OMG, we had choose the right person!” At the end we gave it a style called Modern Wood Chic. It very very fullfill what me and my husband want to live with.</p>
            <p>And she are actually quite fun person after we met few more times, honest to bring out certain hidden issues and some law limitation before and during the reno. For the reno timelines, she make it quite effective, everything was done on time.</p>
            <p>For me, conversation is very important and it make everything done in satisfied condition. We are highly recommend SHE Interior to my other friends and relatives.</p>
            <p>Hey Moon, you deserve to have this compliment and just keep it up with your hard work. WELL DONE!</p>
          </div>
          
        </Review>
      </div>
    </section>
  )
})