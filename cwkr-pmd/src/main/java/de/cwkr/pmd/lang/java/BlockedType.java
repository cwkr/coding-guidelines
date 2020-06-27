package de.cwkr.pmd.lang.java;

import java.util.Collections;
import java.util.List;
import net.sourceforge.pmd.lang.java.ast.ASTAnnotation;
import net.sourceforge.pmd.lang.java.ast.ASTClassOrInterfaceType;
import net.sourceforge.pmd.lang.java.ast.ASTImportDeclaration;
import net.sourceforge.pmd.lang.java.rule.AbstractJavaRule;
import net.sourceforge.pmd.properties.PropertyDescriptor;
import net.sourceforge.pmd.properties.PropertyFactory;

/**
 * Block types with specific prefixes
 */
public class BlockedType extends AbstractJavaRule {
    private static final PropertyDescriptor<List<String>> PREFIXES = PropertyFactory
        .stringListProperty("prefixes")
        .desc("List of fully-qualified type names or package prefixes to block")
        .defaultValue(Collections.emptyList())
        .build();

    public BlockedType() {
        definePropertyDescriptor(PREFIXES);
    }

    @Override
    public Object visit(ASTImportDeclaration node, Object data) {
        for (String prefix : getProperty(PREFIXES)) {
            if (node.getImportedName().startsWith(prefix)) {
                addViolation(data, node, prefix);
            }
        }
        return super.visit(node, data);
    }

    @Override
    public Object visit(ASTClassOrInterfaceType node, Object data) {
        for (String prefix : getProperty(PREFIXES)) {
            if (node.getImage().startsWith(prefix)) {
                addViolation(data, node, prefix);
            }
        }
        return super.visit(node, data);
    }

    @Override
    public Object visit(ASTAnnotation node, Object data) {
        for (String prefix : getProperty(PREFIXES)) {
            if (node.getAnnotationName().startsWith(prefix)) {
                addViolation(data, node, prefix);
            }
        }
        return super.visit(node, data);
    }
}
