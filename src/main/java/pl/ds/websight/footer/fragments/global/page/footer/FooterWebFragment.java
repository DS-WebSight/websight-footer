package pl.ds.websight.footer.fragments.global.page.footer;

import org.osgi.service.component.annotations.Component;
import pl.ds.websight.fragments.registry.WebFragment;

@Component
public class FooterWebFragment implements WebFragment {

    @Override
    public String getKey() {
        return "websight.global.page.footer";
    }

    @Override
    public String getFragment() {
        return "/apps/websight-footer/web-resources/fragments/global/page/footer/FooterFragment.js";
    }

    @Override
    public int getRanking() {
        return 100;
    }
}
