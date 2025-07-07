package de.cwkr.pmd.lang.java;

import net.sourceforge.pmd.test.SimpleAggregatorTst;

public class UseSlf4jTest extends SimpleAggregatorTst {
    @Override
    public void setUp() {
        addRule("category/java/cwkr/custom.xml", "UseSlf4j");
    }
}
