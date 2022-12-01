<template>
    <v-container>
        <!-- <slot name="header"></slot> -->
        <!-- <slot name="default"></slot> -->
        <!-- <slot name="footer"></slot> -->
        <!-- <slot v-bind:user="user">
            {{ user.lastName }}
        </slot> -->
        <ul>
            <li v-for="todo in filteredTodos" v-bind:key="todo.id">
                <!--
    We have a slot for each todo, passing it the
    `todo` object as a slot prop.
    -->
                <slot name="todo" v-bind:todo="todo">
                    <!-- Fallback content -->
                    {{ todo.name }}
                </slot>
            </li>
        </ul>
    </v-container>
</template>

<script>
export default {
    props: ['todos'],
    data() {
        return {
            filteredTodos: [
                {
                    id: 1,
                    name: 'tapash',
                    title: 'paul',
                    isComplete:true,
                },
                {
                    id: 2,
                    name: 'tapash2',
                    title: 'paul',
                    isComplete:false,
                },
                {
                    id: 3,
                    name: 'tapash3',
                    title: 'paul3',
                    isComplete:true
                }
            ],

        }
    },

}
</script>