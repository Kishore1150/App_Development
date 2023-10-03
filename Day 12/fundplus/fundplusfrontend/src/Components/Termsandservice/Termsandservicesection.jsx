import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Termsandservicesection = () => {
  const navigate=useNavigate();
  return (
    <main>
      <section className="xl:px-72 xl:pb-24 lg:pb-12 lg:px-6 bg-backgroundwhite h-full ">
        <div className="flex z-10  pt-6 items-center gap-3 text-sm text-darkteal">
          <span onClick={() => navigate("/home")}>
            <i class="fa-solid  fa-house-chimney"></i>
          </span>
          <span className="text-lightgray text-sm ">
            <i class="fa-solid text-sm fa-angle-right"></i>
          </span>
          <p>Terms and conditions</p>
        </div>
        <div className="flex flex-col text-darkteal  text-lg gap-7">
          <div className="mt-8 flex flex-col gap-4">
            <p>
              These Terms of Service cover your activities on Fundplus, our
              platform that enables people to create the change they want to
              see, and Fundplus Politics, our platform that empowers voters to
              make informed election decisions (“platforms”). These platforms
              allow people to start and promote “campaigns”, which include
              petitions and fundraisers on Fundplus, candidate questions and
              endorsements on Fundplus Politics and related actions like
              creating and sharing content via our platforms and third-party
              sites and services.
            </p>
            <div className="px-10 flex flex-col gap-5">
              <p className="flex items-center gap-2">
                <span>1.</span>
                <span className="font-bold">User accounts</span>
              </p>
              <p className="px-5">
                You need an account for most activities on our platforms. Keep
                your password somewhere safe, because you’re responsible for all
                activity associated with your profile. If you suspect someone
                else is using your account, let us know by contacting our Help
                Desk. You have to be at least 13 years or older to use Fundplus.
              </p>
              <p className="px-5">
                When you sign or create a petition or contribute to a fundraiser
                via our platform, a Fundplus account is created for you. All
                your campaign activities are then tied to this account.
              </p>
              <p className="px-5">
                To use Fundplus Politics, you have to create a separate Fundplus
                Politics account. All your activities, such as endorsing a
                candidate or submitting a question to a candidate are then tied
                to your account.
              </p>
              <p className="px-5">
                When setting up your account, you must provide accurate and
                complete information, including a valid email address. You have
                complete responsibility for your account and everything that
                happens on your account, including for any harm or damage (to us
                or anyone else) caused by someone using your account without
                your permission. This means you need to be careful with your
                password. You may not transfer your account to someone else or
                use someone else’s account without their permission. Inform us
                immediately upon learning that someone else may be using your
                account without your permission by contacting us through our
                Help Center.
              </p>
              <p className="px-5">
                Our platforms are for people who are at least 13 years of age.
                If you are younger than 13 you may not set up an account by
                yourself, but we encourage you to invite a parent or guardian to
                create a campaign about areas of interest to you. If we discover
                that you have created an account and you are younger than 13, we
                will terminate your account. In order to create or contribute to
                a fundraiser campaign, you must be at least 18 years of age. For
                more information, see Fundraiser campaigns, below.
              </p>
            </div>
            <div className="px-10 flex flex-col gap-5">
              <p className="flex items-center gap-2">
                <span>2.</span>
                <span className="font-bold">User content rules</span>
              </p>
              <p className="px-5">
                You’re responsible for what you post on our platforms. You
                should keep your campaigns and other content you upload in line
                with all Community Guidelines and the law, and respect the
                intellectual property rights of others. It’s not something we
                want to do, but we can terminate your account for repeated or
                major offenses.
              </p>
              <p className="px-5">
                When you sign or create a petition or contribute to a fundraiser
                via our platform, a Fundplus account is created for you. All
                your campaign activities are then tied to this account.
              </p>
              <p className="px-5">
                <span className="font-bold">
                  Follow our Community Guidelines:
                </span>
                When posting content you must follow the Community Guidelines
                that are applicable to the product or feature you are using.
              </p>
              <p className="px-5">
                <span className="font-bold">
                  Abide by the law and respect rights of others:
                </span>
                WYou cannot post any campaign or content that violates
                applicable local or national laws of your country, or
                internationallaws or regulations. If your fundraising initiative
                is not legitimate, don’t start it. You are solely responsible
                for any campaign, content, and actions you post or take via the
                platforms and their consequences.
              </p>
              <p className="px-5">
                <span className="font-bold">Enforcement by Fundplus:</span>
                If we are put on notice that your campaign or content violates
                the law or the rights of others (for example, if it is
                established that it is defamatory or violates privacy,
                intellectual property or publicity rights or others, or is
                funding an illegal activity), if we discover that your campaign
                or content violates our Community Guidelines, or if we believe
                your campaign or content is inappropriate or objectionable, we
                may remove it from our platforms , or we may make edits to bring
                your content into compliance. In the vast majority of cases, we
                will notify you and try to work with you to fix the issue before
                we take any of these actions (but we are not obligated to do
                so).
              </p>
              <p className="px-5">
                Fundplus has discretion in enforcing these Terms. We may
                terminate or suspend your permission to use our platforms and
                services or disable your account at any time, and with or
                without notice, for any material or repeated violation of these
                Terms, your failure to pay any fees when due, upon the request
                of law enforcement or government agencies, for extended periods
                of inactivity, for unexpected technical issues or problems, or
                for engagement by you in fraudulent or illegal activities. Upon
                any such termination we may delete your account, passwords and
                content and we may prevent you from further access to the
                platforms and use of our services. Your content may still be
                available on the platforms even if your account is terminated or
                suspended. You agree that we will have no liability to you or
                any third party for termination of your account, removal of your
                content or blocking of your access to our platforms and
                services.
              </p>
            </div>
            <div className="px-10 flex flex-col gap-5">
              <p className="flex items-center gap-2">
                <span>3.</span>
                <span className="font-bold">Posting user content</span>
              </p>
              <p className="px-5">
                You retain ownership of content you post to our platforms, but
                you should make sure you’re allowed to share it. We’re allowed
                to make versions of your content publicly available to anyone
                through any media, and others can do the same. Be sure to make
                backups of your work too.
              </p>
              <p className="px-5">
                <span className="font-bold">
                  The content you submit on the platforms is not confidential:
                </span>
                Any content you submit or post on the platforms is likely to be
                publicly available, including all petitions you create, your
                comments to any petitions you signed and the questions you
                submit to candidates (on our websites, in apps and in social
                media pages). If you are concerned about other Fundplus or
                Fundplus Politics community members or people you don’t know
                seeing a particular message or other content of yours, please do
                not post it. If you do not wish to have your name publicly
                displayed in connection with a particular petition, you may
                select the option not to display your signature publicly. Please
                check out our Privacy Policy for more details on information we
                collect and share when you use the platforms.
              </p>
              <p className="px-5">
                <span className="font-bold">
                  The content you post (including photos) remains yours, and you
                  also allow us to reuse and share it:
                </span>
                By submitting and posting content, you do not lose any ownership
                rights you may have over your content. However, you authorize us
                to share this content with anyone, distribute it on any platform
                and in any media, and to make modifications or edits to it as we
                see fit (e.g. for clarity or optimization purposes). For
                example, we may shorten a petition title for it to appear on our
                homepage, reformat a petition for a video highlighting petition
                victories, or share the content with interested media. You also
                authorize us to allow others to do the same with your content.
                In legal language, by submitting or posting content on or
                through the platforms , you grant us a worldwide, non-exclusive,
                royalty-free license (with the right to sublicense) to use,
                copy, reproduce, process, adapt, modify, publish, transmit,
                display, and distribute your content in any and all media or
                distribution methods (existing now or later developed). This
                includes making your content available to other companies,
                organizations, or individuals who partner with Fundplus for the
                syndication, broadcast, distribution, or publication of content
                on other media. You represent and warrant that you have all the
                rights, power, and authority necessary to authorize us to use
                any content that you submit. You also agree to all such uses of
                your content with no compensation paid to you.
              </p>
              <p className="px-5">
                <span className="font-bold">Sharing campaigns</span>
                and other actions: Except in very limited circumstances where
                we’ll expressly ask you not to, we encourage you to link to,
                post to social media and third party services, such as Facebook
                or Twitter, share via email, or otherwise copy and share
                individual petitions and campaigns of interest to you, or your
                candidate endorsements or questions you post or upvote, but only
                for informational, non-commercial purposes. If you share another
                user’s petitions, questions, or other content, you may not make
                any modifications, and you may not remove any attributions. When
                you post content to any third party service through the features
                and functionalities of our platforms (such as our apps or API),
                you will be subject to the terms of that third party service. If
                you want to remove any petition or content from a third party
                service, you should contact that third party service and request
                removal directly from them.
              </p>
              <p className="px-5">
                <span className="font-bold">No user content storage:</span> We
                are not a content-archiving service. We do not promise to store
                or make available on our platforms any content that you or other
                users may post for any length of time. You are solely
                responsible for keeping backups of everything you post on the
                platforms.
              </p>
            </div>
            <div className="px-10 flex flex-col gap-5">
              <p className="flex items-center gap-2">
                <span>4.</span>
                <span className="font-bold">Fundraiser campaigns</span>
              </p>
              <p className="px-5">
                If you start or support a fundraiser on Fundplus, it’s your
                responsibility to keep the promises you make to contributors,
                and to do due diligence on campaigns before contributing. We
                don’t endorse any fundraisers that users start on Fundplus.
              </p>
              <p className="px-5">
                Through our Fundplus platform, we offer petition starters the
                ability to raise funds to support their Fundplus petition, which
                may include initiatives like raising funds for printing petition
                signatures, organizing a signature delivery event, advertising
                the petition, or donating to a cause related to the petition.
              </p>
              <p className="px-5">
                If you start a fundraiser campaign and accept contributions from
                other Fundplus users, you are legally bound towards those other
                members to deliver on any promise you make in connection with
                your fundraiser campaign. If you are unable to deliver on any
                such promises, and if there are disputes between you and the
                users who have contributed to your fundraiser, you will have
                sole responsibility to reach a settlement with the members,
                which may include refunds. Fundplus may assist in resolutions of
                disputes between fundraisers and contributors, for example by
                sharing their mutual contact information, but is under no
                obligation to do so.
              </p>
              <p className="px-5">
                If you are raising funds on behalf of a third party individual
                or organization, you represent and warrant that you are
                authorized to do so.
              </p>
              <p className="px-5">
                Fundplus may charge service fees for the hosting and
                administration of your fundraiser. You will be required to agree
                to such service fees upon the creation of your fundraiser.
              </p>
              <p className="px-5">
                Credit card payment processing services are provided by Stripe.
                Upon setting up a fundraiser, you agree to Stripe’s Connected
                Account Agreement which includes the Stripe Terms of Service.
                This includes your obligation to provide Stripe accurate and
                complete information as requested for the processing of
                contribution payments. Stripe will store certain information
                about you. For more information, see our Privacy Policy.
              </p>
              <p className="px-5">
                Any perks or gifts you give or accept to receive in connection
                with a fundraiser campaign is the sole responsibility of the
                starter of the fundraiser and the contributor. Fundplus will not
                facilitate and disclaims any responsibility in connection with
                any gifts or perks.
              </p>
              <p className="px-5">
                Any contributions or gifts you may receive via the fundraiser
                feature on our platform may constitute taxable income for you.
                You are solely responsible for the payment of any taxes you owe
                as a result of your fundraising activities on Fundplus. Fundplus
                may be obligated to report taxable income to the relevant tax
                authorities.
              </p>
              <p className="px-5">
                If you make contributions to fundraisers of others, you are
                solely responsible for making any investigation and getting all
                information you may deem necessary before making the payment.
                Fundplus does not endorse or provide warranties of any kind
                regarding fundraisers of its users.
              </p>
              <p className="px-5">
                Refunds are to be agreed between the starter of the fundraiser
                campaign and the contributor. In a very limited number of cases,
                Fundplus may intervene and withdraw funds from the fundraiser
                account to refund contributors, for example if Fundplus
                determines that the fundraiser does not comply with our
                Community Guidelines or other rules under these Terms.
              </p>

              <p className="px-5">
                <span className="font-bold">Sharing campaigns</span>
                and other actions: Except in very limited circumstances where
                we’ll expressly ask you not to, we encourage you to link to,
                post to social media and third party services, such as Facebook
                or Twitter, share via email, or otherwise copy and share
                individual petitions and campaigns of interest to you, or your
                candidate endorsements or questions you post or upvote, but only
                for informational, non-commercial purposes. If you share another
                user’s petitions, questions, or other content, you may not make
                any modifications, and you may not remove any attributions. When
                you post content to any third party service through the features
                and functionalities of our platforms (such as our apps or API),
                you will be subject to the terms of that third party service. If
                you want to remove any petition or content from a third party
                service, you should contact that third party service and request
                removal directly from them.
              </p>
              <p className="px-5">
                <span className="font-bold">No user content storage:</span> We
                are not a content-archiving service. We do not promise to store
                or make available on our platforms any content that you or other
                users may post for any length of time. You are solely
                responsible for keeping backups of everything you post on the
                platforms.
              </p>
            </div>
            <div className="px-10 flex flex-col gap-5">
              <p className="flex items-center gap-2">
                <span>5.</span>
                <span className="font-bold">Open platform</span>
              </p>
              <p className="px-5">
                Campaigns on our platforms represent the many opinions of
                millions of people. We don’t take responsibility for their
                views, nor do we monitor content for legality or accuracy.
                You’ll find links to other sites on our platforms – once you
                leave us, we’re not responsible for all the wild, wacky and
                wonderful things that can happen out there.
              </p>
              <p className="px-5">
                <span className="font-bold">
                  We are not responsible for the content or actions of our
                  users, and we do not monitor user campaigns or content:{" "}
                </span>
                Campaigns or content posted by users come from people,
                organizations, political candidates, and other various sources.
                We make no promises about the reliability of any source or the
                accuracy, usefulness, safety, or intellectual property rights of
                any user campaign or content, nor do we endorse any political
                candidates, campaigns, or petitions or support any views,
                opinions, endorsements, recommendations, or advice that may be
                posted by users. You acknowledge that certain users may have
                commercial interests in their campaigns. We do not monitor or
                review petitions, fundraiser campaigns, or other content
                submitted by users, or evaluate them for compliance with foreign
                or domestic laws and regulations. You therefore use the Fundplus
                and Fundplus Politics services and rely on any content you find
                at your own risk.
              </p>
              <p className="px-5">
                If you find any campaign or other user content that violates our
                Community Guidelines, please use the “Report a policy violation”
                function on each petition page or file a Help Center Request.
              </p>
              <p className="px-5">
                If you are raising funds on behalf of a third party individual
                or organization, you represent and warrant that you are
                authorized to do so.
              </p>
              <p className="px-5">
                <span className="font-bold"> Links out: </span>When you use our
                platforms, you will find links to other websites that we don’t
                own or control. We are not responsible for the content or any
                other aspect of these third party sites, including their
                collection of information about you. You should also read their
                terms and conditions and privacy policies.
              </p>
            </div>
            <div className="px-10 flex flex-col gap-5">
              <p className="flex items-center gap-2">
                <span>6.</span>
                <span className="font-bold">Our rights</span>
              </p>
              <p className="px-5">
                We own the Fundplus and Fundplus Politics platforms including the
                website, present or future apps and services, and things like
                our logos, API, code, and content created by our employees –
                don’t mess with those!
              </p>
              <p className="px-5">
                We are not responsible for the content or actions of our users,
                and we do not monitor user campaigns or content:{" "}
              </p>
              <p className="px-5">
                If you find any campaign or other user content that violates our
                Community Guidelines, please use the “Report a policy violation”
                function on each petition page or file a Help Center Request.
              </p>
              <p className="px-5">
                All right, title, and interest in and to the Fundplus and Fundplus
                Politics platforms and services including our website, our
                existing or future applications, our APIs, databases, and the
                content our employees or partners submit or provide through our
                services (but excluding content provided by users) are and will
                remain the exclusive property of Fundplus and its licensors. Our
                platforms and services are protected by copyright, trademark,
                and other laws of both the United States and foreign countries.
                Nothing gives you a right to use the Fundplus name or any of the
                Fundplus or Fundplus Politics trademarks, logos, domain names, and
                other distinctive brand features. Any feedback, comments, or
                suggestions you may provide regarding Fundplus, Fundplus Politics,
                or the services is entirely voluntary and we will be free to use
                such feedback, comments, or suggestions as we see fit and
                without any obligation to you.
              </p>
              <p className="px-5">
                You may not do any of the following while accessing or using the
                platforms and services:
              </p>
              <div className="flex flex-col gap-3">
                <p className="px-10">
                  1.access, tamper with, or use non-public areas of the
                  platform, Fundplus’s computer systems, or the technical
                  delivery systems of Fundplus’s service providers.
                </p>
                <p className="px-10">
                  2.disable, interfere with, or try to circumvent any of the
                  features of the platforms related to security or probe, scan,
                  or test the vulnerability of any of our systems.
                </p>
                <p className="px-10">
                  3.copy, modify, create a derivative work of, reverse engineer,
                  reverse assemble, or otherwise attempt to discover any source
                  code of the Fundplus or Fundplus Politics platforms or services.
                </p>
                <p className="px-10">
                  4.access or search or attempt to access or search our
                  platforms by any means (automated or otherwise) other than
                  through our currently available search functionalities that
                  are provided via our website, mobile apps, or API (and only
                  pursuant to those API terms and conditions). Crawling the
                  Fundplus site is permissible if done in accordance with the
                  provisions of the robots.txt file; however, scraping the
                  services, platforms, and databases is expressly prohibited
                  unless authorized in a written agreement between you and
                  Fundplus.
                </p>
                <p className="px-10">
                  5.in any way use the Fundplus or Fundplus Politics services to
                  send altered, deceptive, or false source-identifying
                  information (such as sending email communications falsely
                  appearing as Fundplus); or interfere with, or disrupt, (or
                  attempt to do so), the access of any user, host, or network,
                  including, without limitation, sending a virus, overloading,
                  flooding, spamming, mail-bombing the platforms or services, or
                  in any other manner interfering with or creating an undue
                  burden on the services.
                </p>
              </div>
            </div>
            <div className="px-10 flex flex-col gap-5">
              <p className="flex items-center gap-2">
                <span>7.</span>
                <span className="font-bold">
                  Purchases, donations and fundraiser contributions
                </span>
              </p>
              <p className="px-5">
                We work with a different company to process payments so we can
                stay focused on improving our platforms, and empowering people
                to create change. When you make a payment, you agree to use a
                valid payment method.
              </p>
              <p className="px-5">
                We may provide you the ability to purchase promotional items
                related to petitions and campaigns (for example our Promoted
                Petitions), make a charitable donation to a third party
                organization, contribute to a fundraiser, or purchase other
                products or services.
              </p>
              <p className="px-5">
                We work with Stripe, a credit card payment processing company to
                process all credit card transactions. If you participate in a
                fundraising campaign, or if you make a payment for services,
                Stripe will store on our behalf certain information about you.
                For more information, see our Privacy Policy.
              </p>
              <p className="px-5">
                You agree that, for all purchase, donation, or contribution
                transactions, (a) you will not use an invalid or unauthorized
                payment method; (b) you will be charged using the payment method
                you designate; and (c) all transactions are final and
                non-refundable (unless otherwise determined by Fundplus in its
                sole discretion). You understand and acknowledge that payments
                made to Fundplus are not tax-deductible as charitable donations.
                Charitable donations to qualified tax-exempt organizations made
                through our platforms may be tax-deductible. Please review any
                relevant terms and conditions of the receiving organization when
                making a donation.
              </p>
              <p className="px-5">
                If you make a purchase, donation, or contribution through our
                platform, you agree to pay the applicable fee or amount in
                accordance with any pricing and payment terms presented to you
                for that purchase donation or contribution. All amounts do not
                include taxes, and you are responsible for paying any applicable
                taxes. You are also responsible for paying applicable standard
                credit card processing fees.
              </p>
            </div>
            <div className="px-10 flex flex-col gap-5">
              <p className="flex items-center gap-2">
                <span>8.</span>
                <span className="font-bold">Government terms</span>
              </p>
              <p className="px-5">
                We understand that Indian government entities that create
                official accounts on our platforms may have restrictions related
                to these terms.
              </p>
              <p className="px-5">
                Federal, state or local government entities in the India
                may create Decision Maker or elected official accounts on
                Fundplus and Fundplus Politics. We acknowledge that these types of
                account holders may not be able to accept all of the provisions
                of our Terms of Service. In particular, for India federal agencies,
                the governing law of these Terms of Service will be the laws of
                the India, without regard to its conflicts of
                law principles and, in the absence of federal law and to the
                extent permitted under federal law, the laws of the State of
                Tamilnadu, without regard to its conflicts of law principles.
                In addition, indemnification provisions in our Terms of Service
                apply to Federal, state, or local government entities in the
                India only to the extent permitted by such entities’
                jurisdiction’s laws.
              </p>
            </div>
          </div>
          <div></div>
        </div>
      </section>
    </main>
  );
}
