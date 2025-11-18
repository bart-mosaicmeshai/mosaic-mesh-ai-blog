# Post 9: Modernizing Legacy Django - The 2.2 to 4.2 LTS Journey

**Status**: Not Started
**Target Word Count**: 800-1000 words (~4 min read)
**Publish Date**: TBD

## Hook

"I inherited a Django 2.2 codebase. 40 technical notes later, here's what I learned."

## Key Points

- Initial state assessment (technical debt)
- The systematic 11-phase plan
- Critical moments (PostgreSQL migration, CSRF discovery)
- By the numbers (40 notes, 740 tests, zero errors)
- Lessons for others doing similar upgrades
- Incremental beats big-bang rewrites

## Projects Referenced

- StartUpWebApp
- PROJECT_HISTORY.md
- 40+ technical notes
- Migration documentation

## Key Sections

### 1. Initial State Assessment (150 words)

**What I Inherited**:
- Django 2.2 (EOL - end of life)
- SQLite database (not production-ready)
- Print statements for debugging
- Mixed jQuery versions (1.x, 2.x, 3.x)
- Minimal test coverage
- Undocumented decisions
- Technical debt everywhere

**The Question**: Rewrite or refactor?

**The Decision**: Systematic modernization
- Keep what works
- Fix incrementally
- Test everything
- Document decisions
- Never break main

### 2. The Systematic Plan (200 words)

**11 Phases** (from PROJECT_HISTORY.md):

1. **Logging Framework** (replace print statements)
2. **Django 2.2 → 3.2** (intermediate upgrade)
3. **Django 3.2 → 4.2** (LTS target)
4. **PostgreSQL Migration** (SQLite → production DB)
5. **Test Infrastructure** (PostgreSQLTestCase)
6. **CSRF Token Fix** (critical bug)
7. **jQuery Consolidation** (3.7.1 everywhere)
8. **Template Modernization** (security + performance)
9. **Multi-Tenant Architecture** (separate DBs per fork)
10. **Linting Cleanup** (9,000 → 0 errors)
11. **Documentation** (50+ markdown files)

**The Strategy**:
- One phase at a time
- Test after each change
- Commit when green
- Document learnings
- Celebrate milestones

**Why This Worked**:
- Manageable chunks
- Incremental progress
- Low risk
- Always deployable

### 3. Critical Moments (400 words)

#### The PostgreSQL Migration

**Why Migrate?**
- SQLite = development DB
- PostgreSQL = production standard
- Multi-tenant support
- Better concurrency
- Production parity

**The Challenge**:
```python
# SQLite allows this:
date_field = models.DateField(default=datetime.now)

# PostgreSQL requires:
date_field = models.DateField(default=timezone.now)
```

**What Broke**:
- Different SQL syntax
- Timezone handling
- Auto-increment fields
- Transaction behavior
- Test database creation

**The Solution**: PostgreSQLTestCase
```python
class PostgreSQLTestCase(TestCase):
    """
    Base test case that handles PostgreSQL-specific setup.
    Optimizes test database creation and cleanup.
    """

    @classmethod
    def setUpClass(cls):
        # One-time DB setup
        super().setUpClass()
        cls._create_test_db()

    def setUp(self):
        # Fast cleanup via transactions
        self.db_transaction = transaction.atomic()
        self.db_transaction.__enter__()

    def tearDown(self):
        # Rollback instead of truncate
        self.db_transaction.__exit__(None, None, None)
```

**Results**:
- 740 tests passing
- Production parity achieved
- 75% cost savings (multi-tenant)

#### The CSRF Token Discovery

**The Discovery**:
- All AJAX calls failing intermittently
- 403 errors
- No clear pattern
- Affecting cart, checkout, everything

**Root Cause Analysis**:
- Template refactoring changed structure
- CSRF token refresh logic broke
- jQuery upgrade exposed issue
- Been broken for months!

**The Fix**:
```javascript
// Centralized CSRF token handling
function getCsrfToken() {
    return document.querySelector('[name=csrfmiddlewaretoken]').value;
}

// All AJAX calls use it
$.ajax({
    url: url,
    headers: {'X-CSRFToken': getCsrfToken()},
    // ...
});
```

**How Tests Helped**:
- Functional tests caught it
- Isolated to AJAX calls
- Reproducible test case
- Prevented production disaster

#### Template Modernization

**Before**:
```django
{# Old style #}
{% load staticfiles %}
<script src="{% static 'js/app.js' %}"></script>
```

**After**:
```django
{# Modern Django 4.2 #}
{% load static %}
<script src="{% static 'js/app.js' %}" defer></script>
```

**Improvements**:
- Security: CSP headers
- Performance: async/defer
- Modern: template tags
- Maintainable: consistent patterns

### 4. By the Numbers (150 words)

**The Journey**:
- **40 Technical Notes**: Every decision documented
- **11 Completed Phases**: Systematic progress
- **740 Tests**: 100% pass rate maintained
- **Zero Linting Errors**: From 9,000+
- **3 Months**: October-November 2025
- **50+ Documentation Files**: Knowledge preserved

**Code Quality**:
- Before: 9,000+ linting errors
- After: 0 errors
- Test coverage: 95%+
- Documentation: Comprehensive

**Production Readiness**:
- ✓ LTS Django version (4.2)
- ✓ Production database (PostgreSQL)
- ✓ Professional logging
- ✓ Modern dependencies
- ✓ Fully tested
- ✓ Well documented

### 5. Lessons for Others (200 words)

**Do This**:
1. **Start with Tests**: Can't refactor safely without them
2. **One Change at a Time**: Incremental progress wins
3. **Document Everything**: Future you will thank you
4. **Celebrate Milestones**: Motivation matters
5. **Keep Main Green**: Always deployable

**Don't Do This**:
1. **Big-Bang Rewrite**: Too risky
2. **Skip Tests**: Recipe for disaster
3. **Rush**: Quality takes time
4. **Ignore Debt**: Compounds like financial debt
5. **Go Alone**: Get code reviews

**When to Rewrite vs Refactor**:

**Refactor If**:
- Core logic is sound
- Tests exist or can be added
- Incremental path exists
- Team understands code

**Rewrite If**:
- Fundamentally broken architecture
- No tests, can't add tests
- Technology is obsolete
- Cost of change > cost of new

**My Case**: Refactor was right choice
- Good architecture
- Could add tests
- Worked incrementally
- Lower risk

**Key Insight**: Systematic, tested upgrades succeed where rewrites fail.

## Assets Needed

- [ ] PROJECT_HISTORY.md excerpts
- [ ] Version progression timeline
- [ ] Test pass rate over time
- [ ] Linting error reduction chart
- [ ] Technical debt visualization
- [ ] Before/after code comparisons
- [ ] Migration checklist

## Code Snippets

1. PostgreSQLTestCase full implementation
2. CSRF token fix (before/after)
3. Template modernization examples
4. Logging framework setup
5. Multi-tenant configuration

## Takeaway

Systematic, tested upgrades succeed where big-bang rewrites fail. Incremental progress wins.

## Call to Action

"Professional practices and systematic experimentation. Let me show you my developer toolkit..."

## SEO Keywords

- Django upgrade tutorial
- Django 2.2 to 4.2
- PostgreSQL migration
- legacy code refactoring
- Django modernization
- incremental refactoring
- technical debt reduction

## Writing Notes

- Emphasize journey and learnings
- Be honest about challenges
- Show decision-making process
- Include both successes and failures
- Make it actionable for readers
- Provide framework for similar upgrades
- Celebrate the wins

## Technical Checklist

- [ ] Review PROJECT_HISTORY.md
- [ ] Extract phase descriptions
- [ ] Document PostgreSQL migration details
- [ ] Gather CSRF bug information
- [ ] Create timeline visualization
- [ ] Compile metrics over time
- [ ] Review technical notes
- [ ] Extract key code examples

## Draft Status

- [ ] Outline reviewed
- [ ] Gather historical artifacts
- [ ] Create visualizations
- [ ] First draft
- [ ] Technical review
- [ ] Edit pass
- [ ] Final review
- [ ] Published
