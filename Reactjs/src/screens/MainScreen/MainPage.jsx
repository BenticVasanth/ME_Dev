import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Search from '../Dashboard/Search'
import Home from '../Dashboard/Home'
import Sabbathdocs from '../Dashboard/Sabbathdocs'
import Bible from '../Dashboard/Bibles'
import StudyBible from '../Dashboard/Bibles/StudyBible'
import Commentaries from '../Dashboard/Commentaries'
import Theology from '../Dashboard/Theology'
import Dictionaries from '../Dashboard/Dictionaries'
import Ebooks from '../Dashboard/Ebooks'
import SpiritualArticles from '../Dashboard/SpiritualArticles'
import MarialogyBooks from '../Dashboard/MarialogyBooks'
import MarialogyStudies from '../Dashboard/MarialogyStudies'
import PrayerRain from '../Dashboard/PrayerRain'
import PrayerNotes from '../Dashboard/PrayerNotes'
import SinaiLetter from '../Dashboard/SinaiLetter'
import WorkShopDocs from '../WorkShopDocs'
import FastingDocs from '../Dashboard/FastingDocs'
import DiplomaDocs from '../Dashboard/DiplomaDocs'
import VirginBiblio from '../Dashboard/VirginBiblio'
import Events from '../Dashboard/Events'
import Requests from '../Dashboard/Requests'
import Feedback from 'react-bootstrap/esm/Feedback'
import CtwSite from '../Dashboard/CtwSite'


function MainPage() {
  alert("")
	return (


		<div className="container-fluid p-0 m-0">
			<Routes>
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
			</Routes>
		</div>

	)
}

export default MainPage