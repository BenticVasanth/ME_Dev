<template>
<div>
    <TopBar></TopBar>

    <div class="img-cont">
        <img class="img-fluid banImg" src="@/assets/images/magnifyelshaddai_banner.jpg" img-alt="Responsive image" />
        <div class="head">An understanding room for the words of Living G_D</div>
        <div class="subhead">
            <p class="m-0">You search the Scriptures, for in them you think you have eternal life; and these are they which testify of Me. (John 5:39)</p>
            <p class="m-0">For assuredly, I say to you, till heaven and earth pass away, one jot(YOD) or one tittle will by no means pass from the law till all is fulfilled. (Mathew 5:18)</p>
            <p>I will worship toward Your holy temple, And praise Your name For Your lovingkindness and Your truth; For You have magnified Your word above all Your name. (Psalms 138:2)
                <br />- Jesus Christ</p>
        </div>
    </div>

    <div class="row p-4 m-0">
        <div class="col-lg-4 col-md-12 col-sm-12">
            <b-container>
                <b-card>
                    <img class="pr-2 w-100" src="@/assets/images/catholicTamilWebsiteAdvertisement.png" img-alt="Card image" />
                </b-card>
            </b-container>
        </div>
        <div class="col-lg-4 col-md-12 col-sm-12">
            <Login></Login>
        </div>
        <div class="col-lg-4 col-md-12 col-sm-12">
            <b-container>
                <b-card>
                    <img class="pr-2 w-100" src="@/assets/images/catholicTamilWebsiteAdvertisement.png" img-alt="Card image" />
                </b-card>
            </b-container>
        </div>
    </div>
    <div class="row m-0 p-4 bg-light">
        <div class="col-lg-4 col-md-12 col-sm-12">
            <b-container>
                <img class="p-4 w-100" src="@/assets/images/BWT_Logo_Color_png.png" img-alt="Card image" />
            </b-container>
        </div>
        <div class="col-lg-4 col-md-12 col-sm-12">
            <b-container>
                <h1 class="text-center">PRAYER</h1>
                <p class="text-justify">The law of the Lord is perfect, converting the soul;The testimony of the Lord is sure, making wise the simple;
                    The statutes of the Lord are right, rejoicing the heart;
                    The commandment of the Lord is pure, enlightening the eyes;
                    The fear of the Lord is clean, enduring forever;
                    The judgments of the Lord are true and righteous altogether.
                    More to be desired are they than gold, Yea, than much fine gold;
                    Sweeter also than honey and the honeycomb.
                    Moreover by them your servant is warned, and in keeping them there is great reward.
                    <br /><br /><strong>Psalms 19:7-11</strong>
                </p>
            </b-container>
        </div>
        <div class="col-lg-4 col-md-12 col-sm-12">
            <b-container>
                <img class="p-4 w-100" src="@/assets/images/Tamil_BibleWorkshopTeam_Logo_png.png" img-alt="Card image" />
            </b-container>
        </div>

    </div>
    <Footer></Footer>

</div>
</template>

<script>
import Footer from "@/components/Footer"
import Login from "@/components/Login"
import TopBar from "@/components/TopBar"

export default {
    components: {
        Footer,
        Login,
        TopBar
    },
    data() {
        return {

        }
    },
    name: 'HomePage',
    methods: {

    }
}
</script>
