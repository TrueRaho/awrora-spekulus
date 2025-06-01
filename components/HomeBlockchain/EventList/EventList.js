import React from 'react';
import Container from '@mui/material/Container';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import { useTranslation } from 'next-i18next';
import link from 'public/text/link';
import { useText, useTextAlign, useTextGradient } from 'theme/common';
import LocaleLink from '../../Link';
import ParallaxDouble from '../Parallax/ParallaxDouble';
import EventCard from '../../Cards/Event/EventCard';
import useStyle from './event-list-style';
import Title from '../../Title';

const eventLeft = [
  // {
  //   date: 'Q1',
  //   location: '2026',
  //   subtitle: 'Official Release'
  // },
  {
    date: 'Q2',
    location: '2025',
    subtitle: 'Widget store release'
  },
  {
    date: '16 Jul',
    location: '2024',
    subtitle: 'Demo release'
  },
];

const eventRight = [
  {
    date: 'Q4',
    location: '2025',
    subtitle: 'Al Makeup tool implementation'
  },
  {
    date: '16 Dec',
    location: '2024',
    subtitle: 'Start of the project implementation'
  },
  {
    date: '28 Apr',
    location: '2024',
    subtitle: 'Creation of the project idea'
  },
];

function EventList() {
  const theme = useTheme();
  const { classes, cx } = useStyle();
  const { classes: text } = useText();
  const { classes: align } = useTextAlign();
  const { classes: gradient } = useTextGradient();

  const { t } = useTranslation('common');

  return (
    <div className={classes.root}>
      <ParallaxDouble />
      <div className={classes.background}>
        <div className={classes.bgGradient}>
          <span className={classes.ovalRight} />
          <span className={classes.ovalTop} />
          <span className={classes.ovalBottom} />
        </div>
        <Container className={classes.container}>
          <Title text={t('blockchain.event_list_title')} align="center" />
          {/* <p className={cx(align.textCenter, text.subtitle2)}>
            {t('blockchain.event_list_desc')}
          </p> */}
          <Grid container className={classes.timeline} justifyContent="space-around">
            <Typography className={cx(text.title, classes.yearTitle)}>
              <span className={gradient.doubleMain}>
                2026
              </span>
            </Typography>
            <div className={classes.dashedDivider} />
            <Grid item md={5} xs={12}>
              <ScrollAnimation
                animateOnce
                animateIn="fadeInUpShort"
                delay={500}
                duration={0.5}
              >
                <div className={classes.grid}>
                  <EventCard
                    color="primary"
                    date="Q2"
                    location="2026"
                    desc="Entry into the Slovak Republic market"
                  />
                </div>
              </ScrollAnimation>
            </Grid>
            <Grid item md={5} xs={12}>
              <ScrollAnimation
                animateOnce
                animateIn="fadeInUpShort"
                delay={800}
                duration={0.5}
              >
                <div className={classes.grid}>
                  <EventCard
                    color="secondary"
                    date="Q1"
                    location="2026"
                    desc="Official Release"
                  />
                </div>
              </ScrollAnimation>
            </Grid>
          </Grid>
        </Container>
        <Container>
          <div className={classes.timeline}>
            <div className={classes.solidDivider} />
            <Grid container>
              <Grid item sm={6} xs={12}>
                <Box px={{ lg: 5 }}>
                  <ul className={classes.leftSide}>
                    {eventLeft.map((item, index) => (
                      <li key={index.toString()}>
                        <ScrollAnimation
                          animateOnce
                          animateIn="fadeInRightShort"
                          offset={-100}
                          delay={(200 + (100 * index))}
                          duration={0.5}
                        >
                          <div className={classes.item}>
                            <div className={classes.text}>
                              <Typography component="h2">{item.date}</Typography>
                              <Typography component="h3">{item.location}</Typography>
                              <p>{item.subtitle}</p>
                            </div>
                            {/* <Button variant="outlined" component={LocaleLink} to={link.blogDetail} color={theme.palette.mode === 'dark' ? 'white' : 'black'}>
                              {t('btn_detail')}
                            </Button> */}
                          </div>
                        </ScrollAnimation>
                      </li>
                    ))}
                  </ul>
                </Box>
              </Grid>
              <Grid item sm={6} xs={12}>
                <Box px={{ lg: 5 }}>
                  <ul className={classes.rightSide}>
                    {eventRight.map((item, index) => (
                      <li
                        key={index.toString()}
                        className={classes['type' + item.color]}
                      >
                        <ScrollAnimation
                          animateOnce
                          animateIn="fadeInLeftShort"
                          offset={-100}
                          delay={(200 + (200 * index))}
                          duration={0.5}
                        >
                          <div className={classes.item}>
                            <div className={classes.text}>
                              <Typography component="h2">{item.date}</Typography>
                              <Typography component="h3">{item.location}</Typography>
                              <p>{item.subtitle}</p>
                            </div>
                            {/* <Button variant="outlined" component={LocaleLink} to={link.blogDetail} color={theme.palette.mode === 'dark' ? 'white' : 'black'}>
                              {t('btn_detail')}
                            </Button> */}
                          </div>
                        </ScrollAnimation>
                      </li>
                    ))}
                  </ul>
                </Box>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default EventList;
