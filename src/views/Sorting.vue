<template>
  <div class="grid">
    <h1 class="subheading grey--text">Sorting</h1>

    <v-container class="my-5">
        <v-layout row class="mb-3">
            <v-btn small flat color="grey" @click="sortBy('title')">
                <v-icon left small>folder</v-icon>
                <span class="caption text-lowercase">By project name</span>
            </v-btn>
            <v-btn small flat color="grey" @click="sortBy('person')">
                <v-icon left small>person</v-icon>
                <span class="caption text-lowercase">By person</span>
            </v-btn>
        </v-layout>
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
                    <div class="right">
                        <v-chip small :class="`${project.status} white--text caption my-2`">{{ project.status }}</v-chip>
                    </div>
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
                { title: 'Areate a New WebSite#2', person: 'The Hero#2', due: '2019/01/02', status: 'standby', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo veritatis aspernatur quidem nihil quia sequi, porro tenetur enim possimus exercitationem voluptatum aperiam perspiciatis quae unde totam deleniti! Totam, earum mollitia?'},
                { title: 'Breate a New WebSite#3', person: 'The Hero#3', due: '2019/01/03', status: 'completed', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo veritatis aspernatur quidem nihil quia sequi, porro tenetur enim possimus exercitationem voluptatum aperiam perspiciatis quae unde totam deleniti! Totam, earum mollitia?'},
                { title: 'Freate a New WebSite#4', person: 'The Hero#4', due: '2019/01/04', status: 'standby', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo veritatis aspernatur quidem nihil quia sequi, porro tenetur enim possimus exercitationem voluptatum aperiam perspiciatis quae unde totam deleniti! Totam, earum mollitia?'}
            ],
            sortValue: 'asc'
        }
    },
    methods: {
        sortBy(prop) {
            if (this.sortValue === 'asc') {
                this.projects.sort((a, b) => a[prop] > b[prop] ? -1 : 1)
                this.sortValue = 'desc'
            } else {
                this.projects.sort((a, b) => a[prop] < b[prop] ? -1 : 1)
                this.sortValue = 'asc'
            }
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

.v-chip.completed {
    background: #3cd1c2
}
.v-chip.ongoing {
    background: #ffaa2c
}
.v-chip.standby {
    background: #f83e70
}
</style>
