<template>
  <div class="grid">
    <h1 class="subheading grey--text">Grid Systems</h1>

    <v-container class="my-5">
        <v-layout row wrap>
            <v-flex xs12 md6>
                <v-btn outline block class="primary">1</v-btn>
            </v-flex>
            <v-flex xs4 md2>
                <v-btn outline block class="primary">2</v-btn>
            </v-flex>
            <v-flex xs4 md2>
                <v-btn outline block class="primary">2</v-btn>
            </v-flex>
            <v-flex xs4 md2>
                <v-btn outline block class="primary">2</v-btn>
            </v-flex>
        </v-layout>
    </v-container>

    <v-container class="my-5">
        <v-card flat v-for="project in projects" :key="project.title">
            <v-layout row wrap :class="`pa-3 project ${project.status}`">
                <v-flex xs12 md6>
                    <div class="caption grey--text">Project Title</div>
                    <div>{{ project.title }}</div>
                </v-flex>
                <v-flex xs6 sm4 md2>
                    <div class="caption grey--text">Person</div>
                    <div>{{ project.person }}</div>
                </v-flex>
                <v-flex xs6 sm4 md2>
                    <div class="caption grey--text">Due by</div>
                    <div>{{ project.due }}</div>
                </v-flex>
                <v-flex xs2 sm4 md2>
                    <div class="caption grey--text">Status</div>
                    <div>{{ project.status }}</div>
                </v-flex>
            </v-layout>
            <v-divider></v-divider>
        </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
    data() {
        return {
            projects: [
                { title: 'Create a New WebSite#1', person: 'The Hero#1', due: '2019/01/01', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo veritatis aspernatur quidem nihil quia sequi, porro tenetur enim possimus exercitationem voluptatum aperiam perspiciatis quae unde totam deleniti! Totam, earum mollitia?'},
                { title: 'Create a New WebSite#2', person: 'The Hero#2', due: '2019/01/02', status: 'standby', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo veritatis aspernatur quidem nihil quia sequi, porro tenetur enim possimus exercitationem voluptatum aperiam perspiciatis quae unde totam deleniti! Totam, earum mollitia?'},
                { title: 'Create a New WebSite#3', person: 'The Hero#3', due: '2019/01/03', status: 'completed', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo veritatis aspernatur quidem nihil quia sequi, porro tenetur enim possimus exercitationem voluptatum aperiam perspiciatis quae unde totam deleniti! Totam, earum mollitia?'},
                { title: 'Create a New WebSite#4', person: 'The Hero#4', due: '2019/01/04', status: 'standby', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo veritatis aspernatur quidem nihil quia sequi, porro tenetur enim possimus exercitationem voluptatum aperiam perspiciatis quae unde totam deleniti! Totam, earum mollitia?'}
            ]
        }
    }
}
</script>

<style>
.project.completed {
    border-left: 4px solid #3cd1c2
}
.project.ongoing {
    border-left: 4px solid orange
}
.project.standby {
    border-left: 4px solid tomato
}
</style>
