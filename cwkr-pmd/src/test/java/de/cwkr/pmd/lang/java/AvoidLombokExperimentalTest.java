package de.cwkr.pmd.lang.java;

import net.sourceforge.pmd.testframework.SimpleAggregatorTst;

public class AvoidLombokExperimentalTest extends SimpleAggregatorTst {
    @Override
    public void setUp() {
        addRule("category/java/cwkr/custom.xml", "AvoidLombokExperimental");
    }
}
