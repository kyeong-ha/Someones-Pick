import PageLayout from '@components/common/PageLayout';
import DesktopPage from "./influencer/influencer.desktop";
import { MobilePage } from "./influencer/influencer.mobile";

export function InfluencerPage(){
    return (
        <>
        <PageLayout>
            <DesktopPage />
            <MobilePage />
        </PageLayout>
        </>
    );
}