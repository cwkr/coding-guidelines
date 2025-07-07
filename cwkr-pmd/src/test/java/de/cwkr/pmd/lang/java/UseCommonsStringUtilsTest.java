package de.cwkr.pmd.lang.java;

import net.sourceforge.pmd.test.SimpleAggregatorTst;

public class UseCommonsStringUtilsTest extends SimpleAggregatorTst {
    @Override
    public void setUp() {
        addRule("category/java/cwkr/custom.xml", "UseCommonsStringUtils");
    }
}
