import React from 'react';
import { Icon, IconName } from '@/app/components/IconSVG';
import { ActionCard } from '@/app/components/actionCard/actionCard';
import { Banner } from '@/app/components/banner/banner';
import tailwindConfig from '@/tailwind.config';
import { MainSectionViews } from '@views/quickstart-home/enums';

const colors = tailwindConfig.theme?.extend?.colors as CustomColors;

type EntryBannersProps = {
  changeView: (view: MainSectionViews) => void;
};

function EntryBanners(props: EntryBannersProps) {
  const { changeView } = props;
  return (
    <div className="grid grid-cols-1 grid-rows-[1rem, 1fr] gap-2">
      <section className="mb-[1%]">
        <Banner
          bannerColor={colors.moongray[700]}
          textColor={colors.white}
          buttonColor={colors.moongray[950]}
          buttonTextColor={colors.white}
          bannerText={
            <span>
              Focus on what&apos;s important, <br /> Run only the best and most
              relevant tests.
            </span>
          }
          buttonText="Get Started">
          <div style={{ paddingLeft: '0.5rem' }}>
            <Icon
              name={IconName.Asterisk}
              size={65}
            />
          </div>
        </Banner>
      </section>
      <section>
        <div className="grid grid-cols-3 gap-2">
          <div className="col-span-3 grid grid-cols-3 gap-[1%]">
            <ActionCard
              title="Discover"
              description="new vulnerabilities"
              descriptionColor={colors.moongray[300]}
              cardColor={colors.moongray[950]}
              iconName={IconName.Spacesuit}
              actionText="Start Red Teaming"
              onClick={() => {
                console.log('clicked');
              }}
            />
            <ActionCard
              title="Evaluate"
              description="against standard tests"
              descriptionColor={colors.moongray[300]}
              cardColor={colors.moongray[950]}
              iconName={IconName.CheckList}
              actionText="Run Benchmarks"
              onClick={() => {
                changeView(MainSectionViews.REDTEAMING);
              }}
            />
            <ActionCard
              title="Create"
              description="custom tests"
              descriptionColor={colors.moongray[300]}
              cardColor={colors.moongray[950]}
              iconName={IconName.Lightning}
              actionText="Start Red Teaming"
              onClick={() => {
                console.log('clicked');
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export { EntryBanners };
