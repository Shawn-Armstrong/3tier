<template>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4">
          <v-card class="elevation-12">
            <v-toolbar color="primary" dark>
              <v-toolbar-title>Login</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-text-field
                label="Email"
                prepend-icon="mdi-account"
                type="email"
                v-model="email"
              ></v-text-field>
              <v-text-field
                label="Password"
                prepend-icon="mdi-lock"
                type="password"
                v-model="password"
              ></v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" @click="submit">Login</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const email = ref('');
  const password = ref('');
  
  const submit = () => {
    // Handle the login logic here, such as sending a request to your backend.
    console.log('Logging in with:', email.value, password.value);
  };
  </script>
  
  <style>
  /* Add any additional styling you want for your login component here */
  </style>
  