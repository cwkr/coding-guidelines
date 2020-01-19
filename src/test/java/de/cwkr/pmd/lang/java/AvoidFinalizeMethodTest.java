package de.cwkr.pmd.lang.java;

import net.sourceforge.pmd.testframework.SimpleAggregatorTst;

public class AvoidFinalizeMethodTest extends SimpleAggregatorTst {
    @Override
    public void setUp() {
        addRule("category/java/custom.xml", "AvoidFinalizeMethod");
    }
}
