<template>
<v-container fluid>
  <v-row >
    <v-col>
        <v-card-text>
      <div class="mb-4" align="left">
        <v-row>
        <v-avatar class="mr-4">
          <img src="../static/emotes/OpieOP.png" />
        </v-avatar>
        <strong class="text-h3">Frequently asked questions</strong> 
        </v-row>
        <v-spacer></v-spacer>
      </div>
    </v-card-text>
  <v-card flat style="max-height: 34.5rem;overflow-y:scroll">
  
    <v-card-text style="overflow-y:visible">
      <p>
          AdmiralBulldog a Swedish professional DotA 2 player, and one of the most popular streamers.
      </p>

          <ul>
            <li><b>Name:</b> Henrik Ahnberg</li>
            <li><b>Birth:</b> December 19, 1990</li>
            <li><b>Job:</b> Full Time Livestreaming</li>
            <li><b>Country:</b> Sweden</li>
          </ul>
     <br>
      <hr>
      <br>
      <h2>Benefits of Subscribing</h2>
      <br>
      <h3><b>Everyone who subs gets:</b></h3>
      <p>
       <ul>
            <li>Participate in weekly giveaways on discord worth around 50-150 usd</li>
            <li>Exclusive access to the Krappa Kleb and to the subscriber-only discord.</li>
            <li>Access to the subscriber games at the end of the stream.</li>
            <li>Slow mode immunity and ability to talk in subscriber mode.</li>
            <li>Priority access to fun commands in chat.</li>
            <li> My love and approval.</li>
          </ul>
      </p>

     <h3><b>In addition, SUPER subscribers (9.99$) get:</b></h3>
      <p>
       <ul>
            <li>Exclusive SUPER sub emote.</li>
            <li>Ability to participate in the monthly AMA on discord.</li>
            <li>1.5X increased winners luck on the weekly discord giveaway.</li>
          </ul>
      </p>

      <h3><b>Finally, MEGA subscribers (24.99$) gets all above and:</b></h3>
      <p>
       <ul>
            <li> Exlusive MEGA sub emote.</li>
            <li> 2X increased winners luck on the weekly discord giveaway.</li>
            <li>Same high priority as mods have when it comes to joining Dota2, Quiplash, custom games or similar games.</li>
            <ul>
                <li>Per month, if you are around a lot you can expect to play 1-3 dota games and a decent amount of non-dota games (like custom games, jackbox, etc)</li>
            </ul>
            <li>Added to my steam friend list.</li>
          </ul>
      </p>
    and so on
    </v-card-text>
  </v-card>
    </v-col>
    
  </v-row>
  <Docs />
</v-container>
</template>


<style lang="scss" scoped>
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 2px grey;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #0b6636;
  border-radius: 10px;
}

</style>