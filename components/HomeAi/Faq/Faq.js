import React from 'react';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import { useTranslation } from 'next-i18next';
import Parallax from '../Parallax/ParallaxRight';
import Title from '../../Title';
import useStyles from './faq-style';

const faqData = [
  {
    q: 'What is Spekulus?',
    a: 'Spekulus is an innovative smart mirror developed by us. It combines health monitoring, weather awareness, and smart home integration into a single, elegant device. With built-in AI and a camera, it delivers personalized insights to help you live smarter and healthier.'
  },
  {
    q: 'How does Spekulus detect stress and analyze health?',
    a: 'Spekulus uses a Raspberry Pi camera to capture facial data and our custom AI software to analyze it. The system detects visible signs of stress, fatigue, or skin issues, then offers practical wellness tips, such as breathing exercises or reminders to rest.'
  },
  {
    q: 'What is the Widget Store?',
    a: 'The Widget Store is a unique Spekulus feature launching in Q2 2025. It allows users to customize their mirror experience by downloading various widgets — from weather skins, calendars, and news, to health tips and meditation guides. Think of it as your mirror’s app store.'
  },
  {
    q: 'What makes Spekulus different from other smart mirrors?',
    a: 'Unlike most competitors, Spekulus focuses not just on cosmetic features but on health and well-being. It offers a holistic daily assistant: stress tracking, weather forecasts, skincare analysis, and smart assistant functions all in one device.'
  },
  {
    q: 'Who is behind Spekulus?',
    a: 'Our team at S&S Creation includes developers, AI engineers, and tech visionaries passionate about improving daily life through smart technology. We’re currently seeking partnerships and funding to take Spekulus to the next level.'
  },
];

function Faq() {
  const { classes } = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  const { t } = useTranslation('common');
  const [expanded, setExpanded] = React.useState(0);
  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div className={classes.root}>
      <div className={classes.parallax}>
        <Parallax />
      </div>
      <Container fixed>
        <Grid container spacing={isTablet ? 2 : 8}>
          <Grid item md={5}>
            <Title text={t('ai-landing.faq_subtitle')} align={isMobile ? 'center' : 'left'} />
            {!isTablet && (
              <ScrollAnimation
                animateOnce
                animateIn="fadeInUpShort"
                offset={100}
                delay={500}
                duration={0.5}
              >
                <div className={classes.illustration}>
                  <img src="/images/ai/robot.png" alt="illustration" />
                </div>
              </ScrollAnimation>
            )}
          </Grid>
          <Grid item md={7}>
            <div className={classes.accordion}>
              {faqData.map((item, index) => (
                <div className={classes.item} key={index.toString()}>
                  <Accordion
                    classes={{
                      root: classes.paper
                    }}
                    expanded={expanded === index}
                    onChange={handleChange(index)}
                  >
                    <AccordionSummary
                      classes={{
                        content: classes.content,
                        expanded: classes.expanded,
                      }}
                    >
                      <Typography className={classes.heading}>{item.q}</Typography>
                      <ExpandMoreIcon className={classes.icon} />
                    </AccordionSummary>
                    <AccordionDetails
                      classes={{
                        root: classes.detail,
                      }}
                    >
                      <Typography>
                        {item.a}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              ))}
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Faq;
