<template lang="pug">
v-dialog(v-model="dialog")
  template(#activator="{ on }")
    v-card(:flat="$vuetify.breakpoint.mdAndUp").pa-2
      v-layout.wrap.align-center.session-card
        v-flex.xs12.sm11.md11.pr-1.session-card__left
          .session-card__head
            v-layout.wrap.row
              v-flex.pt-1.shrink.text-xs-center(v-if="!isPoster" :class="{'xs6': $vuetify.breakpoint.smAndDown}")
                span.day.font-weight-bold {{ $t(`days.day${session.day}`) }}
              v-flex.pt-1.shrink.text-xs-center(v-if="!isPoster" :class="{'xs6': $vuetify.breakpoint.smAndDown, 'pl-3': $vuetify.breakpoint.mdAndUp}")
                span(v-if="session.day === '1'") 09.16({{ $t('weekday.mon') }})
                span(v-if="session.day === '2'") 09.17({{ $t('weekday.tue') }})
              v-flex.pl-1.pt-1.shrink.text-xs-center(v-if="session.hours" :class="{'xs6': $vuetify.breakpoint.smAndDown}")
                span {{ session.hours }}
              v-flex.pt-1.shrink.text-xs-center(:class="{'xs6': $vuetify.breakpoint.smAndDown, 'pl-3': $vuetify.breakpoint.mdAndUp}")
                span.talk-format {{ $t('sessions.' + session.talk_format) }}
            v-layout.wrap.justify-start.session-card__head--property
              v-flex.pt-2.shrink.text-xs-center.font-weight-bold.textColor1--text(:class="{'xs6': $vuetify.breakpoint.smAndDown}")
                span.room-tag.px-3.blueGrey1Lighten {{ $t(`rooms.${roomTag}`) }}
              v-flex.pt-2.shrink.text-xs-center(v-if="!isPoster" :class="{'xs6': $vuetify.breakpoint.smAndDown, 'pl-3': $vuetify.breakpoint.mdAndUp}")
                span.mr-2(v-if="$vuetify.breakpoint.mdAndUp") {{ $t('sessions.level') }}:
                span.level-tag.px-3(:class="session.audience_level") {{ session.audience_level }}
              v-flex.pt-2.shrink.text-xs-center(:class="{'xs6': $vuetify.breakpoint.smAndDown, 'pl-3': $vuetify.breakpoint.mdAndUp}")
                span.mr-2 {{ $t('sessions.lang_of_talk') }}:
                span.lang-tag.px-3.font-weight-bold.text-uppercase(
                  :class="session.lang_of_talk === 'en' ? 'themeBlue' : 'themeRed'"
                ) {{ session.lang_of_talk  }}
              v-flex.pt-2.shrink.text-xs-center(:class="{'xs6': $vuetify.breakpoint.smAndDown, 'pl-3': $vuetify.breakpoint.mdAndUp}")
                span.mr-2 {{ $t('sessions.lang_of_slide') }}:
                span.lang-tag.mr-1.px-3.font-weight-bold.text-uppercase(
                  v-for="lang_of_slide in langOfSlideArray"
                  :class="lang_of_slide === 'en' ? 'themeBlue' : 'themeRed'"
                ) {{ lang_of_slide }}
          .session-card__content.py-2
            v-layout
              v-flex.my-1.title.font-weight-black.session-card__content--title {{ session.title }}
            v-layout.justify-start.align-center.my-1
              v-flex.shrink.speaker {{ session.name }}
              v-flex.shrink.ml-1(v-if="session.youtube")
                v-btn(small round flat :href="session.youtube" target="_blank").pa-0.ma-0 
                  v-icon(small) fab fa-youtube
                  span.caption.pl-1 {{ $t("basic.youtube") }}
              v-flex.shrink.ml-1(v-if="session.presentation")
                v-btn(small round flat  :href="session.presentation" target="_blank").pa-0.ma-0
                    v-icon(small) fas fa-tv
                    span.caption.pl-1 {{ $t("basic.presentation") }}
        v-flex.sm1.md1.py-2.px-1.subheading.text-xs-center.clickable.detail(v-on="on" @click="onClick")
          span.themeColor3--text.font-weight-bold {{ $t('sessions.detail') }}

  session-modal-window(:session="session" @close="dialog = false")
</template>

<script>
import SessionModalWindow from '@/components/parts/SessionModalWindow'
import { roomsMaster } from '@/plugins/constants'

export default {
  components: {
    SessionModalWindow
  },
  props: {
    session: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      time: '00:00 - 00:00',
      dialog: false,
      roomsMaster: roomsMaster
    }
  },
  computed: {
    roomTag() {
      return this.roomsMaster[this.session.room_id]
    },
    langOfSlideArray() {
      return this.session.lang_of_slide === 'jpen'
        ? ['jp', 'en']
        : [this.session.lang_of_slide]
    },
    isPoster() {
      return this.session.talk_format_origin.match(/^Poster/)
    }
  },
  methods: {
    ClassForLevel(level) {
      switch (level) {
        case 'All':
          return 'all'
        case 'Beginner':
          return 'beginner'
        case 'Intermediate':
          return 'intermediate'
        case 'Advanced':
          return 'advanced'
        default:
          break
      }
    },
    onClick() {
      this.addParamsToLocation({ sessionId: this.session.id })
    },
    addParamsToLocation(params) {
      window.history.pushState(
        {},
        null,
        this.$router.history.base +
          this.$route.path +
          '?' +
          Object.keys(params)
            .map(key => {
              return (
                encodeURIComponent(key) + '=' + encodeURIComponent(params[key])
              )
            })
            .join('&')
      )
    }
  },
  watch: {
    dialog(new_, old) {
      if (!new_) {
        window.history.go(-1)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/variables.scss';
// level-tagの色は仮置き
$yellow: #f4b66e;
$green: hsl(143, 100%, 59%);

@mixin level-tag($color) {
  color: $color;
  border: 1px solid $color;
}
.clickable {
  cursor: pointer;
}

@media only screen and (max-width: 960px) {
  .detail {
    border-top: 1px solid $blueGrey2;
  }
}

.session-card {
  &__left {
    border-right: 1px solid $blueGrey2;
  }
  &__head {
    .day {
      color: $themeColor3;
    }
    &--property {
      color: $text2;
    }
    .level-tag {
      &.All {
        @include level-tag($twitter);
      }
      &.Beginner {
        @include level-tag($green);
      }
      &.Intermediate {
        @include level-tag($yellow);
      }
      &.Advanced {
        @include level-tag($themeRed);
      }
    }
    .lang-tag {
      color: #fff;
    }
  }
  &__content {
    &--title {
      line-height: 1.3 !important;
    }
    .speaker {
      color: $text2;
    }
  }
}
</style>
