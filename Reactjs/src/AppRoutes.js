import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './Landingpage'
import Register from './Landingpage/components/Register'
import BaseLayout from './screens/MainScreen'
import Search from './screens/Dashboard/Search'
import Home from './screens/Dashboard/Home'
import Sabbathdocs from './screens/Dashboard/Sabbathdocs'
import Bible from './screens/Dashboard/Bibles'
import StudyBible from './screens/Dashboard/Bibles/StudyBible'
import Commentaries from './screens/Dashboard/Commentaries'
import Theology from './screens/Dashboard/Theology'
import Dictionaries from './screens/Dashboard/Dictionaries'
import Ebooks from './screens/Dashboard/Ebooks'
import SpiritualArticles from './screens/Dashboard/SpiritualArticles'
import MarialogyBooks from './screens/Dashboard/MarialogyBooks'
import MarialogyStudies from './screens/Dashboard/MarialogyStudies'
import PrayerRain from './screens/Dashboard/PrayerRain'
import PrayerNotes from './screens/Dashboard/PrayerNotes'
import SinaiLetter from './screens/Dashboard/SinaiLetter'
import WorkShopDocs from './screens/WorkShopDocs'
import FastingDocs from './screens/Dashboard/FastingDocs'
import DiplomaDocs from './screens/Dashboard/DiplomaDocs'
import VirginBiblio from './screens/Dashboard/VirginBiblio'
import Events from './screens/Dashboard/Events'
import Requests from './screens/Dashboard/Requests'
import Feedback from 'react-bootstrap/esm/Feedback'
import CtwSite from './screens/Dashboard/CtwSite'
function AppRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />} />

      <Route path="/create" element={<Register />} />
      <Route path="/dashboard/*" element={<BaseLayout />} >

        <Route path="search" element={<Search />} />
        <Route path="home" element={<Home />} />
        <Route path="sabbath_document" element={<Sabbathdocs />} />
        <Route path="holy_bible" element={<Bible />} />
        <Route path="study" element={<StudyBible />} />
        <Route path="commentaries" element={<Commentaries />} />
        <Route path="theology" element={<Theology />} />
        <Route path="dictionary" element={<Dictionaries />} />
        <Route path="ebooks" element={<Ebooks />} />
        <Route path="spiritual_articles" element={<SpiritualArticles />} />
        <Route path="mariologybook" element={<MarialogyBooks />} />
        <Route path="mariologystudy" element={<MarialogyStudies />} />
        <Route path="prayer_rain" element={<PrayerRain />} />
        <Route path="prayer_notes" element={<PrayerNotes />} />
        <Route path="sinai_letter" element={<SinaiLetter />} />
        <Route path="workshop_doc" element={<WorkShopDocs />} />
        <Route path="fasting_docs" element={<FastingDocs />} />
        <Route path="diploma_books" element={<DiplomaDocs />} />
        <Route path="virgin_biblio" element={<VirginBiblio />} />
        <Route path="evangelic_events" element={<Events />} />
        <Route path="request" element={<Requests />} />
        <Route path="feedback" element={<Feedback />} />
        <Route path="ctw" element={<CtwSite />} />

      </Route>

    </Routes>
  )
}

export default AppRoutes