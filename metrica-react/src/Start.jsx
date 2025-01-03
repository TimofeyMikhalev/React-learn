import Header from "./components/Header/Header"
import TeaachingSection from "./components/TeachingSection"
import DifferencisSection from "./components/DifferencisSection"
import IntroSection from "./components/introSection"
import TabsSection from "./components/TabsSection"
import FeedbackSection from "./components/FittbackSection"
import { useState } from "react"
import EffectSection from "./components/EffectSection"

export default function Start() {
    const [tab, setTab] = useState('effect')

    return (
        <>
            <Header />
            <main>
                <IntroSection />

                <TabsSection active={tab} onChange={(current) => setTab(current)}/>

                { tab === 'main' && <>
                    <TeaachingSection />
                    <DifferencisSection />
                </>}

              
                { tab === 'feedback' && <FeedbackSection /> }

                { tab === 'effect' && <EffectSection/> }
            </main>
         
        </>
    )
}

