package de.cwkr.pmd.lang.java;

import net.sourceforge.pmd.testframework.SimpleAggregatorTst;

public class UseCommonsStringUtilsTest extends SimpleAggregatorTst {
    @Override
    public void setUp() {
        addRule("category/java/cwkr/custom.xml", "UseCommonsStringUtils");
    }
}
