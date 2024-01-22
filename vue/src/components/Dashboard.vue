<template>
<div>
    <TopBar :showmenu="false"></TopBar>
    <Sidemenu></Sidemenu>

    <div class="cardcontent">
        <b-container-fluid>
            <b-row>
                <b-col lg="3" md="6" cols="12" sm="6" v-for="(x,index) in cardList" :key="index" class="my-1">
                    <b-card-group deck>
                        <b-card no-body class="" border-variant="primary">
                            <b-card-body></b-card-body>
                            <template #footer>
                                <b-badge class="float-right" variant="info" style="margin-top: -12px; margin-right:-20px;">Info</b-badge>
                                <small class="text-muted">{{x.CardFooter}}</small>
                            </template>
                        </b-card>
                    </b-card-group>
                </b-col>
            </b-row>
        </b-container-fluid>
    </div>

</div>
</template>

<script>
import TopBar from '@/components/TopBar'
import Sidemenu from '@/components/Sidemenu'
export default {
    components: {
        TopBar,
        Sidemenu
    },
    data() {
        return {
            cardList: [{
                    "title": 1,
                    "CardFooter": "1"
                },
                {
                    "title": 2,
                    "CardFooter": "2"
                },
                {
                    "title": 3,
                    "CardFooter": "3"
                },
                {
                    "title": 4,
                    "CardFooter": "4"
                },
                {
                    "title": 5,
                    "CardFooter": "5"
                },
                {
                    "title": 6,
                    "CardFooter": "6"
                },
                {
                    "title": 7,
                    "CardFooter": "7"
                },
                {
                    "title": 8,
                    "CardFooter": "8"
                }

            ]
        }
    }
}
</script>
