import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { H2, P, UL, LI, A } from "@/components/Typography";


export function LibraryTabs() {
    return (
        <Tabs defaultValue="account" className="w-[400px]">
            <TabsList>
                <TabsTrigger value="single-to-single">Single to Single</TabsTrigger>
                <TabsTrigger value="single-to-multiple">Single to Multiple</TabsTrigger>
                <TabsTrigger value="multiple-to-multiple">Multiple to Multiple</TabsTrigger>
                <TabsTrigger value="clean-in-place">Clean in Place</TabsTrigger>
            </TabsList>
            <TabsContent value="single-to-single">
                <H2>Single Source to Single Destination</H2>
                <P>Single Source to Single Destination Systems can be used for a variety of applications in almost every industry. View the design sketch above for our basic system configuration and click on component parts for more details. Systems can be tailored by changing component parts to suit your individual application needs.</P>
                <UL>
                    <LI><A href="#">Isolated Pig Launcher</A></LI>
                    <LI><A href="#">Piggable Tee</A></LI>
                    <LI><A href="#">Process Pig</A></LI>
                    <LI><A href="#">Piggable Elbow</A></LI>
                    <LI><A href="#">Piggable Wafer Ball Valve</A></LI>
                    <LI><A href="#">Relax Pig Receiver</A></LI>
                    <LI><A href="#">1-Way Pig Receiver</A></LI>
                </UL>
            </TabsContent>
            <TabsContent value="single-to-multiple">
                <H2>Single Source to Multiple Destinations</H2>
                <P>
                    Single source to multiple destination systems can be used for a variety of applications in almost every industry. View the design sketches above for our basic system configurations and click on component parts for more details. Systems can be tailored by changing component parts to suit your individual application needs.
                </P>
                <UL>
                    <LI><A href="#">Isolated Pig Launcher</A></LI>
                    <LI><A href="#">Piggable Tee</A></LI>
                    <LI><A href="#">Piggable Relax T-Port Valve</A></LI>
                    <LI><A href="#">Piggable Relax Tee and Stop</A></LI>
                    <LI><A href="#">Piggable 3-Way Diverter Valve</A></LI>
                    <LI><A href="#">Piggable Wafer Ball Valve</A></LI>
                    <LI><A href="#">Piggable Elbow</A></LI>
                    <LI><A href="#">Relax Pig Receiver</A></LI>
                </UL>
            </TabsContent>
            <TabsContent value="multiple-to-multiple">
                <H2>Clean-in-Place Pigging Systems</H2>
                <P>
                    Clean-In-Place (CIP) pig systems are designed to allow the pig to be cleaned while remaining in the pig launcher. CIP systems are most commonly used for sanitary applications. However, this system design can also be used in any application where cleaning the pig and the pig launcher is advantageous; such as, with colors or perfumed products. While Pigging Solutions has a variety of different CIP system designs for various applications, the system shown above is a 2-pig system as well as a CIP system. The 2-pig system uses two advancing pigs from opposite ends of the transfer line to push product to a targeted discharge location.
                </P>
                <UL>
                    <LI><A href="#">CIP Pig Launcher</A></LI>
                    <LI><A href="#">Piggable Tee</A></LI>
                    <LI><A href="#">Process Pig</A></LI>
                    <LI><A href="#">2-Pig Relax Tee and Stop</A></LI>
                    <LI><A href="#">Piggable Elbow</A></LI>
                    <LI><A href="#">Piggable Wafer Ball Valve</A></LI>
                </UL>
            </TabsContent>
            <TabsContent value="clean-in-place">
                <H2>Multiple Sources to Multiple Destinations</H2>
                <P>
                    Simultaneous product transfers and line pigging between multiple sources and multiple destinations is easily accomplished using Pigging Solutions Piggable Manifolds. With our piggable manifolds, clients can make product transfers to multiple destinations at the same time without the need for unsafe manual cross-connection hoses. Switching between product sources and destinations can be performed safely and easily without product loss or risk of product cross-contamination.
                </P>
                <UL>
                    <LI><A href="#">Isolated Pig Launcher</A></LI>
                    <LI><A href="#">Piggable Tee</A></LI>
                    <LI><A href="#">Piggable Manifolds</A></LI>
                    <LI><A href="#">Piggable Elbow</A></LI>
                    <LI><A href="#">Piggable Wafer Ball Valve</A></LI>
                    <LI><A href="#">Relax Pig Receiver</A></LI>
                </UL>
            </TabsContent>
        </Tabs>
    );
}
